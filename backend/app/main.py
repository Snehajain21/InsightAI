from fastapi import FastAPI
from app.database.database import create_db_and_tables
from contextlib import asynccontextmanager
from app.api.assessment import router as assessment_router
from fastapi.middleware.cors import CORSMiddleware

# Runs when the application starts
@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()   # Creates database tables automatically
    yield

# Create FastAPI application
app = FastAPI(
    title="InsightAI API",
    description="Backend API for the InsightAI Student Skill Analyzer",
    version="1.0.0",
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Assessment APIs
app.include_router(assessment_router)

# Root API
@app.get("/")
def root():
    return {
        "message": "Welcome to InsightAI API"
    }

# Health Check API
@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "message": "Backend is running successfully"
    }