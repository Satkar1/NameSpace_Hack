import requests
import os
from pathlib import Path

TOKEN = "YOUR_WEB3_STORAGE_API_KEY"  # Replace with actual key
folder = Path("../terminator/data/archives")
target_file = sorted(folder.glob("*.zip"))[-1]  # latest zip

def upload_to_ipfs(file_path):
    headers = {"Authorization": f"Bearer {TOKEN}"}
    with open(file_path, 'rb') as f:
        files = {'file': (file_path.name, f)}
        response = requests.post('https://api.web3.storage/upload', headers=headers, files=files)
        if response.ok:
            cid = response.json()['cid']
            print(f"🚀 Uploaded to IPFS! CID: {cid}")
        else:
            print("❌ Failed:", response.text)

if target_file.exists():
    upload_to_ipfs(target_file)
else:
    print("❌ No archive to upload.")
