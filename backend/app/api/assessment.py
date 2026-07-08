from fastapi import APIRouter
import json
from fastapi import HTTPException
from app.database.database import get_session
from app.models.assessment import AssessmentSession

from app.schemas.assessment_schema import (
    StartAssessmentRequest,
    StartAssessmentResponse,
    SubmitAnswerRequest,
    ReportRequest,
)

from app.services.assessment_service import (
    save_answer,
    get_next_question,
    save_generated_questions,
    generate_assessment_report

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

    try:
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

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Unable to start assessment: {str(e)}"
        )

@router.post("/answer")
def submit_answer(request: SubmitAnswerRequest):

    try:
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

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Unable to submit answer: {str(e)}"
        )


@router.post("/report")
def get_report(request: ReportRequest):

    try:
        session = get_session()

        report = generate_assessment_report(
            session=session,
            session_id=request.session_id
        )

        if report is None:
            raise HTTPException(
                status_code=404,
                detail="Assessment not found."
            )

        return report

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Unable to generate assessment report: {str(e)}"
        )

