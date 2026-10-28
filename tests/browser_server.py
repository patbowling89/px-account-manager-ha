"""Isolated demo server for UI tests. Fictional records only, no HA/Plex access."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import importlib.util
import json
from datetime import date
from threading import Lock
from urllib.parse import urlsplit, parse_qs

BASE = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("model", BASE / "custom_components/px_account_manager/model.py")
model = importlib.util.module_from_spec(spec)
spec.loader.exec_module(model)
ledger = model.Ledger(today=date(2026, 10, 26))
lock = Lock()

HTML = """<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0"><px-account-manager style="height:100vh"></px-account-manager><script type="module">
import '/px_account_manager_static/panel.js';
document.querySelector('px-account-manager').hass={user:{id:'demo-admin',is_admin:true},themes:{darkMode:false},callWS:async message=>{const res=await fetch('/command',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(message)});const data=await res.json();if(!res.ok)throw new Error(data.error);return data;}};
</script></body></html>"""


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        route = urlsplit(self.path)
        if route.path == "/phone":
            body = b'<!doctype html><html><body style="margin:0;background:#ddd"><iframe title="Phone viewport" src="/" style="width:390px;height:760px;border:0;display:block;margin:auto"></iframe></body></html>'
            self.send_response(200)
            self.send_header("Content-Type", "text/html")
            self.end_headers()
            self.wfile.write(body)
            return
        if route.path == "/":
            html = HTML.replace("darkMode:false", "darkMode:true") if parse_qs(route.query).get("ha_theme") == ["dark"] else HTML
            body = html.encode()
            self.send_response(200)
            self.send_header("Content-Type", "text/html")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        if self.path.startswith("/px_account_manager_static/"):
            self.path = "/custom_components/px_account_manager/www/" + self.path.split("/")[-1]
        return super().do_GET()

    def do_POST(self):
        global ledger
        with lock:
            try:
                body = json.loads(self.rfile.read(int(self.headers["Content-Length"])))
                args = body.get("args", {})
                action = body["action"]
                if action == "list":
                    result = ledger.data[args["table"]]
                elif action == "export":
                    result = {"format": "px_account_manager", "version": 1, "data": ledger.data}
                elif action == "plex":
                    raise ValueError("Plex is deliberately disconnected in this test")
                else:
                    draft = model.Ledger(ledger.data, date(2026, 10, 26))
                    result = draft.mutate(action, args)
                    ledger = draft
                self.send_response(200)
            except Exception as error:
                self.send_response(400)
                result = {"error": str(error)}
            encoded = json.dumps(result).encode()
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(encoded)))
            self.end_headers()
            self.wfile.write(encoded)


if __name__ == "__main__":
    import os
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--member-count", type=int, default=0)
    parser.add_argument("--port", type=int, default=8778)
    options = parser.parse_args()
    for i in range(options.member_count):
        ledger.mutate("create_member", {"display_name": f"Demo Member {i+1:02}", "email": f"demo{i+1:02}@example.com"})
    os.chdir(BASE)
    ThreadingHTTPServer(("127.0.0.1", options.port), Handler).serve_forever()
