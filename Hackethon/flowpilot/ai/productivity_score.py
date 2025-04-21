import json
from pathlib import Path
from collections import Counter

focus_apps = ['code', 'chrome', 'terminal', 'notion']
distractions = ['youtube', 'instagram', 'spotify']

def score_log(file):
    with open(file) as f:
        log = json.load(f)

    app = log.get("app", "")
    score = 0

    if app in focus_apps:
        score += 1
    elif app in distractions:
        score -= 1

    return score

def evaluate_day(day="2025-04-17"):
    folder = Path(f"../terminator/data/logs/{day}")
    total_score = 0
    count = 0

    for file in folder.glob("*.json"):
        total_score += score_log(file)
        count += 1

    avg = round(total_score / count, 2) if count else 0
    print(f"🎯 Productivity Score for {day}: {avg}")

if __name__ == "__main__":
    evaluate_day()
