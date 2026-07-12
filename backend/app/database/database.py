from sqlmodel import SQLModel, create_engine, Session

# Import models
from app.models.assessment import AssessmentSession, AssessmentAnswer

DATABASE_URL = "sqlite:///insightai.db"

engine = create_engine(
    DATABASE_URL,
    echo=True
)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session