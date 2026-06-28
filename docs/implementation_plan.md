# Implementation Plan

## Project Title

**InsightAI – AI Student Skill Analyzer**

---

# Technology Stack

## Frontend

* React.js
* HTML
* CSS
* JavaScript

## Backend

* FastAPI
* Uvicorn

## AI Integration

* Google Gemini API

## Database

* SQLite

## Version Control

* Git
* GitHub

---

# Project Folder Structure

```text
InsightAI/

backend/
│
├── app/
│   ├── api/
│   ├── services/
│   ├── database/
│   ├── models/
│   ├── schemas/
│   ├── config.py
│   └── main.py
│
├── requirements.txt
└── .env

frontend/
│
├── src/
├── public/
└── package.json

docs/

README.md

.gitignore
```

---

### Backend Modules

## 1. API Module

Responsible for exposing REST APIs to the frontend.

Planned APIs:

* Start Assessment
* Submit Assessment
* Get Assessment Report

---

## 2. AI Service

The AI Service will manage all interactions with the Google Gemini API.

Responsibilities:

* Generate assessment questions
* Evaluate student responses
* Generate the final assessment summary
* Handle Gemini API communication and errors

---

## 3. Database Module

Responsibilities:

* Store assessment sessions
* Store student responses
* Store generated assessment reports
 ---

# Frontend Modules

## Home Page

Displays project information and allows the student to start an assessment.

---

## Assessment Page

The student:

* Enters their name
* Selects one skill or technology
* Answers 3–5 assessment questions

---

## Report Page

Displays:

* Overall Rating
* Strengths
* Areas for Improvement
* Learning Recommendations

---

# REST API Design

## POST /assessment/start

Creates a new assessment session.

---

## POST /assessment/answer

Saves the student's answer for the current question.

---

 ## POST /assessment/report

Generates the final assessment report after all questions are answered.

---
# Database Tables

## AssessmentSession

Stores information about each assessment session.

Fields:

- id
- student_name
- selected_skill
- overall_rating
- summary_report
- created_at

---

## AssessmentAnswer

Stores each assessment question and the student's response.

Fields:

- id
- session_id
- question
- answer
- evaluation

# Development Milestones

## Milestone 1

Project Planning & Documentation

---

## Milestone 2

Backend Setup

---

## Milestone 3

Gemini API Integration

---

## Milestone 4

Frontend Development

---

## Milestone 5

Database Integration

---

## Milestone 6

Testing & Bug Fixes

---

## Milestone 7

Final Review

---

# Testing Plan

The project will be tested for:

* API functionality
* Gemini API integration
* Assessment workflow
* Database operations
* Frontend integration
* Error handling

---

# Expected Deliverables

* AI Student Skill Analyzer
* FastAPI Backend
* React Frontend
* Gemini API Integration
* AI-generated Assessment Report
* Project Documentation
* GitHub Repository
