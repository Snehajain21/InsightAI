from sqlmodel import Session
import json
from app.services.gemini_service import generate_questions
from app.models.assessment import AssessmentAnswer


def save_answer(
    session: Session,
    session_id: int,
    question_number: int,
    question: str,
    answer: str,
):
    """
    Save a student's answer to the database.
    """

    assessment_answer = AssessmentAnswer(
    session_id=session_id,
    question_number=question_number,
    question=question,
    answer=answer
)

    session.add(assessment_answer)
    session.commit()
    session.refresh(assessment_answer)

    return assessment_answer

def save_generated_questions(session, assessment):
    """
    Generate interview questions and save them in the database.
    """

    generated_questions = generate_questions(
        assessment.selected_skill
    )

    assessment.questions = json.dumps(
        generated_questions["questions"]
    )

    session.add(assessment)
    session.commit()
    session.refresh(assessment)

    return assessment

from sqlmodel import select

from app.models.assessment import AssessmentSession


def generate_report(session, session_id: int):
    """
    Generate a simple assessment report.
    """

    assessment = session.get(AssessmentSession, session_id)

    if assessment is None:
        return None

    report = {
        "student_name": assessment.student_name,
        "selected_skill": assessment.selected_skill,
        "overall_rating": "Pending AI Evaluation",
        "strengths": [
            "Assessment completed"
        ],
        "improvement_areas": [
            "AI evaluation will be available after Gemini integration."
        ],
        "recommendations": [
            "Continue practicing the selected skill."
        ]
    }

    return report

import json


def get_next_question(session, session_id: int, question_number: int):
    """
    Return the next interview question for the session.
    """

    assessment = session.get(AssessmentSession, session_id)

    questions = json.loads(assessment.questions)

    if question_number >= len(questions):
        return None

    return questions[question_number]

