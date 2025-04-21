import pytesseract
from PIL import Image
from pathlib import Path
import json

def extract_text(image_path):
    img = Image.open(image_path)
    text = pytesseract.image_to_string(img)
    return text.strip()

def process_log_day(day="2025-04-17"):
    folder = Path(f"../terminator/data/logs/{day}")
    for file in folder.glob("*.json"):
        with open(file) as f:
            log = json.load(f)

        if 'screenshot' in log and Path(log['screenshot']).exists():
            extracted = extract_text(log['screenshot'])
            log['ocr_text'] = extracted

            with open(file, 'w') as f:
                json.dump(log, f, indent=2)
            print(f"🧠 Text extracted for {file.name}")

if __name__ == "__main__":
    process_log_day()
