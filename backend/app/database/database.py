from sqlmodel import SQLModel, create_engine

# Import models so SQLModel knows about them
from app.models.assessment import AssessmentSession, AssessmentAnswer

DATABASE_URL = "sqlite:///insightai.db"

engine = create_engine(DATABASE_URL, echo=True)


def create_db_and_tables():
    """
    Create all database tables.
    """
    SQLModel.metadata.create_all(engine)