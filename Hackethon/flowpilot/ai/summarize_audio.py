import requests

def summarize(text):
    # Replace with your AI endpoint or use Groq/OpenAI SDK
    prompt = f"Summarize this for productivity insight:\n{text}"
    response = requests.post("http://localhost:8000/summarize", json={"prompt": prompt})
    return response.json()["summary"]

if __name__ == "__main__":
    with open("sample_transcript.txt") as f:
        transcript = f.read()

    result = summarize(transcript)
    print("📝 Summary:\n", result)
