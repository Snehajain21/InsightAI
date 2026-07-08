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
from app.schemas.assessment_schema import ReportRequest
from app.services.assessment_service import generate_report

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

    return StartAssessmentResponse(
        session_id=assessment.id,
        message="Assessment started successfully."
    )

@router.post("/answer")
def submit_answer(request: SubmitAnswerRequest):

    session = get_session()

    save_answer(
        session=session,
        session_id=request.session_id,
        question=request.question,
        answer=request.answer
    )

    return {
        "message": "Answer submitted successfully."
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