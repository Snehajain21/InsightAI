from fastapi import FastAPI

app = FastAPI(
    title="InsightAI API",
    description="Backend API for the InsightAI Student Skill Analyzer",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "Welcome to InsightAI API"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "message": "Backend is running successfully"
    }