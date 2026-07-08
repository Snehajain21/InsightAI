from pydantic import BaseModel


class StartAssessmentRequest(BaseModel):
    student_name: str
    selected_skill: str


class StartAssessmentResponse(BaseModel):
    session_id: int
    message: str


class SubmitAnswerRequest(BaseModel):
    session_id: int
    question: str
    answer: str


class ReportRequest(BaseModel):
    session_id: int