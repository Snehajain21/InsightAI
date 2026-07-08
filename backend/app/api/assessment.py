from fastapi import APIRouter
from app.database.database import get_session
from app.models.assessment import AssessmentSession
from app.schemas.assessment_schema import (
    StartAssessmentRequest,
    StartAssessmentResponse,
)

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