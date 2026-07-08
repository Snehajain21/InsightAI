from typing import Optional
from sqlmodel import SQLModel, Field


class AssessmentSession(SQLModel, table=True):
    """
    Stores information about each assessment session.
    """

    id: Optional[int] = Field(default=None, primary_key=True)
    student_name: str
    selected_skill: str
    overall_rating: Optional[str] = None
    summary_report: Optional[str] = None


class AssessmentAnswer(SQLModel, table=True):
    """
    Stores each assessment question and the student's answer.
    """

    id: Optional[int] = Field(default=None, primary_key=True)
    session_id: int
    question: str
    answer: str
    evaluation: Optional[str] = None