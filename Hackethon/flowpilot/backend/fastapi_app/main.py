from fastapi import FastAPI, Request
from pydantic import BaseModel
import openai  # or groq if preferred
import os

app = FastAPI()

openai.api_key = os.getenv("OPENAI_API_KEY")

class Prompt(BaseModel):
    prompt: str

@app.post("/summarize")
async def summarize(prompt: Prompt):
    resp = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt.prompt}]
    )
    return {"summary": resp.choices[0].message['content']}
