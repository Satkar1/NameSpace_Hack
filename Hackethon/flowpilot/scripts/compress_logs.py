import os
import zipfile
from datetime import datetime
from pathlib import Path

log_dir = Path("../terminator/data/logs")
archive_dir = Path("../terminator/data/archives")
archive_dir.mkdir(exist_ok=True)

today = datetime.today().strftime('%Y-%m-%d')
day_folder = log_dir / today
zip_path = archive_dir / f"{today}.zip"

if not day_folder.exists():
    print("❌ No logs to compress.")
    exit()

with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for file in day_folder.glob("*.json"):
        zipf.write(file, file.relative_to(log_dir))
        print(f"📦 Added {file.name}")

print(f"✅ Compressed logs saved to {zip_path}")
