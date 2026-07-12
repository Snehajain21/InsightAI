def generate_question_prompt(skill: str) -> str:
    return f"""
You are an expert AI Technical Interviewer.

Generate exactly 5 interview questions for the skill: {skill}.

Requirements:
Requirements:

1. Questions should be suitable for undergraduate Computer Science students.
2. Cover different topics of the selected skill.
3. Avoid repeating common interview questions whenever possible.
4. Make every assessment feel different.
5. Do not generate duplicate questions.
6. Mix conceptual and practical questions.
7. Keep every question SHORT and clear.
8. Each question should be ONE sentence only.
9. Maximum 20 words per question.
10. Avoid long explanations or examples.
11. Ask direct interview-style questions.

Difficulty:

- Question 1 → Easy
- Question 2 → Easy
- Question 3 → Medium
- Question 4 → Medium
- Question 5 → Practical scenario

Return ONLY valid JSON.

Format:

{{
  "questions": [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5"
  ]
}}

Do not return markdown.
Do not return explanations.
Do not return any extra text.
"""

def generate_report_prompt(skill: str, interview_data: str) -> str:
    """
    Prompt to evaluate the student's interview answers.
    """

    return f"""
You are an expert AI Interview Coach.

A student completed a technical interview for the skill: {skill}.

Interview Data:
{interview_data}

Evaluate the student's performance carefully.

IMPORTANT RULES:

1. Return ONLY valid JSON.
2. Do NOT return markdown.
3. Do NOT return explanations outside JSON.
4. Give an overall rating as a NUMBER between 0 and 10.
5. Return EXACTLY 3 strengths.
6. Return EXACTLY 3 improvement areas.
7. Return EXACTLY 3 recommendations.
8. Keep every point SHORT and concise.
9. Maximum 8 words per point.
10. Do NOT explain the reason.
11. Do NOT use colons (:).
12. Use simple professional English.
13. Avoid paragraphs completely.
14. Return only keywords or short action sentences.
15. Do not repeat similar ideas.
16. Return EXACTLY 3 learning resources.
17. Resources should be well-known and relevant.
18. Return EXACTLY 1 next_skill.
19. The next_skill should naturally follow the selected skill.
20. Return only valid JSON matching the example exactly.

Return JSON in this exact format:

{{
  "overall_rating": 8.5,

  "strengths": [
    "Strong Python basics.",
    "Logical problem solving.",
    "Good communication."
  ],

  "improvement_areas": [
    "Exception handling.",
    "Object-oriented programming.",
    "Time complexity."
  ],

  "recommendations": [
    "Practice Python daily.",
    "Build one FastAPI project.",
    "Solve coding problems."
  ],

  "learning_resources": [
    "Python Official Documentation",
    "CS50 Python",
    "LeetCode"
  ],

  "next_skill": "FastAPI"
}}
"""