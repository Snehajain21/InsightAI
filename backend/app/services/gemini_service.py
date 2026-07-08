import json
import google.generativeai as genai

from app.config import settings

from app.prompts.assessment_prompt import (
    generate_question_prompt,
    generate_report_prompt,
)

# Configure Gemini
genai.configure(api_key=settings.GEMINI_API_KEY)

# Load Gemini model
model = genai.GenerativeModel("gemini-2.5-flash")


def generate_questions(skill: str):
    """
    Generate interview questions using Gemini.
    """

    try:
        prompt = generate_question_prompt(skill)

        response = model.generate_content(prompt)

        response_text = response.text
        response_text = response_text.replace("```json", "")
        response_text = response_text.replace("```", "")
        response_text = response_text.strip()

        return json.loads(response_text)

    except Exception as e:
        raise Exception(f"Failed to generate interview questions: {str(e)}")


def generate_report(skill: str, interview_data: str):
    """
    Generate the final interview evaluation using Gemini.
    """

    try:
        prompt = generate_report_prompt(skill, interview_data)

        response = model.generate_content(prompt)

        response_text = response.text
        response_text = response_text.replace("```json", "")
        response_text = response_text.replace("```", "")
        response_text = response_text.strip()

        return json.loads(response_text)

    except Exception as e:
        raise Exception(f"Failed to generate assessment report: {str(e)}")