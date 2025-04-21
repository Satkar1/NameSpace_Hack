import os
import supabase
from dotenv import load_dotenv
load_dotenv()

client = supabase.create_client(
    os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY")
)

def write_summary(user_id, date, focus_score, summary):
    result = client.table("summaries").insert({
        "user_id": user_id,
        "date": date,
        "focus_score": focus_score,
        "summary": summary
    }).execute()

    print("✅ Supabase write complete", result)

# Example usage
# write_summary("user123", "2025-04-17", 7.5, "Focused coding session")
