def generate_question_prompt(skill: str) -> str:
    return f"""
You are an AI Interview Coach.

Generate exactly 5 interview questions for the skill: {skill}.

Rules:
- Question 1: Basic
- Question 2: Basic
- Question 3: Intermediate
- Question 4: Intermediate
- Question 5: Simple practical coding scenario

Keep the questions suitable for undergraduate Computer Science students preparing for internships.

Return ONLY valid JSON in this format:

{{
  "questions": [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5"
  ]
}}

Do not include any explanation or extra text.
"""

def generate_report_prompt(skill: str, interview_data: str) -> str:
    """
    Prompt to evaluate the student's interview answers.
    """

    return f"""
You are an AI Interview Coach.

A student completed a technical interview for the skill: {skill}.

Below are the interview questions and the student's answers.

{interview_data}

Evaluate the student's performance.

Return ONLY valid JSON in this format:

{{
  "overall_rating": "8/10",
  "strengths": [
    "...",
    "..."
  ],
  "improvement_areas": [
    "...",
    "..."
  ],
  "recommendations": [
    "...",
    "..."
  ]
}}

Do not return any explanation outside the JSON.
"""