from fastapi import APIRouter
from app.database.database import get_session
from app.database.database import get_session
from app.schemas.assessment_schema import SubmitAnswerRequest
from app.services.assessment_service import save_answer
from app.models.assessment import AssessmentSession
from app.schemas.assessment_schema import (
    StartAssessmentRequest,
    StartAssessmentResponse,
)
import json

from app.services.assessment_service import save_generated_questions
from app.schemas.assessment_schema import ReportRequest
from app.services.assessment_service import generate_report
from app.services.gemini_service import generate_questions
from app.services.assessment_service import get_next_question

router = APIRouter(
    prefix="/assessment",
    tags=["Assessment"]
)


@router.post(
    "/start",
    response_model=StartAssessmentResponse
)
def start_assessment(request: StartAssessmentRequest):

    session = get_session()

    assessment = AssessmentSession(
        student_name=request.student_name,
        selected_skill=request.selected_skill
    )

    session.add(assessment)
    session.commit()
    session.refresh(assessment)

    assessment = save_generated_questions(
        session=session,
        assessment=assessment
    )

    questions = json.loads(assessment.questions)

    return {
        "session_id": assessment.id,
        "first_question": questions[0]
    }

@router.post("/answer")
def submit_answer(request: SubmitAnswerRequest):

    session = get_session()

    save_answer(
        session=session,
        session_id=request.session_id,
        question_number=request.question_number,
        question=request.question,
        answer=request.answer
    )

    next_question = get_next_question(
        session=session,
        session_id=request.session_id,
        question_number=request.question_number
    )

    if next_question is None:
        return {
            "completed": True,
            "message": "Interview completed."
        }

    return {
        "completed": False,
        "next_question": next_question
    }


@router.post("/report")
def get_report(request: ReportRequest):

    session = get_session()

    report = generate_report(
        session=session,
        session_id=request.session_id
    )

    if report is None:
        return {
            "message": "Assessment not found."
        }

    return report

@router.get("/gemini-test")
def gemini_test(skill: str = "Python"):

    return generate_questions(skill)