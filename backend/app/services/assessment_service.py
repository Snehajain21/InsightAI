import json

from sqlmodel import Session, select

from app.models.assessment import (
    AssessmentAnswer,
    AssessmentSession,
)

from app.services.gemini_service import (
    generate_questions,
    generate_report as ai_generate_report,
)

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

def save_generated_questions(
    session: Session,
    assessment: AssessmentSession,
):
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

def get_next_question(session, session_id: int, question_number: int):
    """
    Return the next interview question for the session.
    """

    assessment = session.get(AssessmentSession, session_id)

    if assessment is None:
      return None

    questions = json.loads(assessment.questions)

    if question_number >= len(questions):
        return None

    return questions[question_number]

def prepare_interview_data(session, session_id: int):
    """
    Collect all interview questions and answers for evaluation.
    """

    statement = (
        select(AssessmentAnswer)
        .where(AssessmentAnswer.session_id == session_id)
        .order_by(AssessmentAnswer.question_number)
    )

    answers = session.exec(statement).all()

    lines = []

    for item in answers:
        lines.append(
            f"Question: {item.question}\n"
            f"Answer: {item.answer}\n"
        )

    interview_data = "\n".join(lines)

    return interview_data

def generate_assessment_report(session, session_id: int):
    """
    Generate the final AI assessment report.
    """

    assessment = session.get(AssessmentSession, session_id)

    if assessment is None:
        return None

    interview_data = prepare_interview_data(
        session=session,
        session_id=session_id
    )

    report = ai_generate_report(
        skill=assessment.selected_skill,
        interview_data=interview_data
    )

    assessment.overall_rating = report["overall_rating"]
    assessment.summary_report = json.dumps(report)
    

    session.add(assessment)
    session.commit()
    session.refresh(assessment)

    return report
