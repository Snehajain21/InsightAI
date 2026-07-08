import json
import google.generativeai as genai

from app.config import settings
from app.prompts.assessment_prompt import generate_question_prompt

# Configure Gemini
genai.configure(api_key=settings.GEMINI_API_KEY)

# Load Gemini model
model = genai.GenerativeModel("gemini-2.5-flash")


def generate_questions(skill: str):
    """
    Generate interview questions using Gemini.
    """

    prompt = generate_question_prompt(skill)

    response = model.generate_content(prompt)

    response_text = response.text

    # Remove markdown code block if present
    response_text = response_text.replace("```json", "")
    response_text = response_text.replace("```", "")
    response_text = response_text.strip()

    return json.loads(response_text)