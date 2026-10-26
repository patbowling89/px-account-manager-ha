"""Check common accidental personal-data inclusions before uploading source.

This is a narrow preflight, not a guarantee that arbitrary secrets can be detected.
It checks tracked files too when run in an initialized Git repository.
"""
from pathlib import Path
import argparse
import json
import re
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument("--allow-unconfigured", action="store_true", help="Allow placeholder GitHub metadata for a local draft")
args = parser.parse_args()
ignored = {"node_modules", "__pycache__", ".git", "dist"}
paths = {p.relative_to(ROOT) for p in ROOT.rglob("*") if p.is_file() and not ignored.intersection(p.relative_to(ROOT).parts)}
try:
    repository_root = subprocess.check_output(["git", "-C", str(ROOT), "rev-parse", "--show-toplevel"], stderr=subprocess.DEVNULL, text=True).strip()
    if Path(repository_root) == ROOT:
        tracked = subprocess.check_output(["git", "-C", str(ROOT), "ls-files", "-z"], text=True)
        paths.update(Path(p) for p in tracked.split("\0") if p)
except (OSError, subprocess.CalledProcessError):
    pass

issues = []
for path in sorted(paths):
    name = path.name.lower()
    if ".storage" in path.parts or "backups" in path.parts or name.startswith(".env") or name in {"configuration.yaml", "secrets.yaml"} or re.match(r"(?:px-accounts-|customers?-export|payments?-export|home-assistant)", name) or path.suffix.lower() in {".db", ".sqlite", ".sqlite3", ".pem", ".key"}:
        issues.append(f"Private/runtime file must not be published: {path}")
        continue
    full = ROOT / path
    if full.is_file() and path.suffix.lower() in {".py", ".ts", ".tsx", ".json", ".js", ".md", ".yml", ".yaml"}:
        content = full.read_text(errors="replace")
        # Report file and pattern only; never print a potential secret.
        patterns = {"GitHub personal token": r"\bgh[pousr]_[A-Za-z0-9]{30,}\b", "GitHub fine-grained token": r"\bgithub_pat_[A-Za-z0-9_]{30,}\b", "private key": r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----", "JWT-like credential": r"\beyJ[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{15,}\b"}
        for label, pattern in patterns.items():
            if re.search(pattern, content):
                issues.append(f"Possible {label} in {path}")

manifest = json.loads((ROOT / "custom_components/px_account_manager/manifest.json").read_text())
if not args.allow_unconfigured and ("/OWNER/" in manifest["documentation"] or not manifest["codeowners"]):
    issues.append("Set the actual GitHub repository metadata before publication")
if issues:
    print("Publication checks need attention:\n" + "\n".join(issues))
    sys.exit(1)
print(f"Checked {len(paths)} files: no common private runtime files or recognized credential patterns found.")
if args.allow_unconfigured:
    print("GitHub metadata may still be a placeholder; this is a local-draft check.")
