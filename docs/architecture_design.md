# Architecture Design

## Project Title

**InsightAI – AI Student Skill Analyzer**

---

# System Overview

InsightAI follows a client-server architecture where the frontend provides an interactive assessment interface, the backend manages the assessment workflow and business logic, and the Gemini API generates intelligent questions, evaluates responses, and creates personalized student reports.

The system is designed using a modular architecture to ensure scalability, maintainability, and easy feature expansion.

---

# High-Level Architecture

```
                +----------------------+
                |        Student       |
                +----------+-----------+
                           |
                           v
                +----------------------+
                |   React Frontend     |
                |  (User Interface)    |
                +----------+-----------+
                           |
                    HTTP Requests
                           |
                           v
                +----------------------+
                |    FastAPI Backend   |
                +----------+-----------+
                           |
          +----------------+----------------+
          |                |                |
          v                v                v
+----------------+ +----------------+ +----------------+
| Assessment     | | Gemini Service | | Report         |
| Engine         | |                | | Generator      |
+----------------+ +----------------+ +----------------+
          |                |                |
          +----------------+----------------+
                           |
                           v
                  Google Gemini API
                           |
                           v
                +----------------------+
                |  AI Generated Output |
                +----------------------+
                           |
                           v
                +----------------------+
                | SQLite Database      |
                +----------------------+
```

---

# System Components

## 1. Frontend

The frontend provides an interactive interface where students can:

- Enter their profile information
- Answer AI-generated assessment questions
- View assessment progress
- View the final assessment report

Technology:

- React.js

---

## 2. Backend

The backend controls the complete assessment workflow.

Responsibilities:

- Receive user requests
- Validate input
- Manage assessment stages
- Generate prompts
- Communicate with Gemini API
- Process AI responses
- Generate final reports
- Store assessment data

Technology:

- FastAPI

---

## 3. Assessment Engine

The Assessment Engine is the core module of the application.

It is responsible for:

- Managing assessment stages
- Tracking user progress
- Selecting the next assessment category
- Preparing structured prompts
- Passing data to the Gemini API

---

## 4. Gemini API

The Gemini API is responsible for:

- Generating adaptive assessment questions
- Evaluating student responses
- Identifying strengths and weaknesses
- Generating personalized recommendations
- Producing the final assessment summary

---

## 5. Report Generator

The Report Generator converts the AI evaluation into a structured report containing:

- Skill Ratings
- Technical Strengths
- Areas for Improvement
- Confidence Analysis
- Learning Mindset
- Career Readiness
- Growth Summary
- Learning Recommendations

---

## 6. Database

The database stores:

- Student Profile
- Assessment Responses
- Assessment Scores
- Final Reports
- Assessment History

Technology:

- SQLite

---

# Assessment Workflow

1. Student enters profile details.
2. Backend creates an assessment session.
3. Assessment Engine determines the first assessment stage.
4. Gemini generates an assessment question.
5. Student submits a response.
6. Backend sends the response to Gemini.
7. Gemini evaluates the response.
8. Assessment Engine updates the student's profile.
9. Steps 4–8 continue until all assessment stages are completed.
10. Report Generator prepares the final assessment report.
11. The report is displayed to the student and stored in the database.

---

# Assessment Stages

1. Student Background
2. Technical Knowledge
3. Problem Solving
4. Communication & Confidence
5. Learning Mindset
6. Final Skill Profiling Report

---

# Design Principles

- Modular Architecture
- Separation of Concerns
- Reusable Components
- Scalable Backend
- Secure API Integration
- Maintainable Code Structure
- Clear Assessment Workflow