from sqlmodel import Session

from app.models.assessment import AssessmentAnswer


def save_answer(
    session: Session,
    session_id: int,
    question: str,
    answer: str,
):
    """
    Save a student's answer to the database.
    """

    assessment_answer = AssessmentAnswer(
        session_id=session_id,
        question=question,
        answer=answer
    )

    session.add(assessment_answer)
    session.commit()
    session.refresh(assessment_answer)

    return assessment_answer

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