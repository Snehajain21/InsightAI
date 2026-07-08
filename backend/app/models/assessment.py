from typing import Optional
from sqlmodel import SQLModel, Field


class AssessmentSession(SQLModel, table=True):
    """
    Stores information about each assessment session.
    """

    id: Optional[int] = Field(default=None, primary_key=True)
    student_name: str
    selected_skill: str

    questions: Optional[str] = None

    overall_rating: Optional[str] = None
    summary_report: Optional[str] = None


class AssessmentAnswer(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

    session_id: int = Field(foreign_key="assessmentsession.id")

    question_number: int

    question: str

    answer: str