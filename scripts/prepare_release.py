"""Set real GitHub metadata and package the integration. Never uploads files."""
from pathlib import Path
import argparse
import json
import re
import zipfile

base = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser()
parser.add_argument("--repository", required=True, help="GitHub owner/repository")
args = parser.parse_args()
if not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9-]{0,38}/[A-Za-z0-9_.-]+", args.repository):
    parser.error("Use an actual GitHub owner/repository")
owner = args.repository.split("/")[0]
if owner.upper() in {"OWNER", "YOUR_USER", "USERNAME"}:
    parser.error("Replace the example with your actual GitHub username")
manifest_path = base / "custom_components/px_account_manager/manifest.json"
manifest = json.loads(manifest_path.read_text())
manifest.update(documentation=f"https://github.com/{args.repository}", issue_tracker=f"https://github.com/{args.repository}/issues", codeowners=[f"@{owner}"])
manifest_path.write_text(json.dumps(manifest, indent=2) + "\n")
bundle = base / "custom_components/px_account_manager/www/panel.js"
if not bundle.is_file():
    parser.error("Build the frontend first")
output = base / "dist"
output.mkdir(exist_ok=True)
target = output / f"px-account-manager-{manifest['version']}.zip"
with zipfile.ZipFile(target, "w", zipfile.ZIP_DEFLATED) as archive:
    for path in (base / "custom_components").rglob("*"):
        if path.is_file() and "__pycache__" not in path.parts:
            archive.write(path, path.relative_to(base))
print(target)
