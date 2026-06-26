# Implementation Plan

## Project Title

**InsightAI – AI Student Skill Analyzer**

---

# Technology Stack

## Frontend

- React.js
- HTML
- CSS
- JavaScript

## Backend

- FastAPI
- Uvicorn

## AI Integration

- Google Gemini API

## Database

- SQLite
- SQLModel

## Version Control

- Git
- GitHub

---

# Project Folder Structure

```
InsightAI/

backend/
│
├── app/
│   ├── api/
│   ├── services/
│   ├── prompts/
│   ├── database/
│   ├── models/
│   ├── schemas/
│   ├── utils/
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

# Backend Modules

## 1. API Module

Responsible for exposing REST APIs to the frontend.

Planned APIs:

- Start Assessment
- Submit Answer
- Generate Report
- Get Assessment History

---

## 2. Assessment Engine

Responsibilities:

- Manage assessment stages
- Track assessment progress
- Decide next assessment category
- Maintain session flow

---

## 3. Gemini Service

Responsibilities:

- Connect with Gemini API
- Send prompts
- Receive AI responses
- Handle API errors

---

## 4. Prompt Manager

Responsibilities:

- Generate structured prompts
- Separate prompts for each assessment stage
- Maintain prompt consistency

---

## 5. Report Generator

Responsibilities:

- Generate final report
- Calculate skill ratings
- Prepare recommendations
- Create growth summary

---

## 6. Database Module

Responsibilities:

- Store student profiles
- Store assessment sessions
- Store responses
- Store generated reports

---

# Frontend Modules

## Home Page

Project introduction and assessment start.

---

## Student Profile Page

Collect:

- Name
- Skills
- Interests
- Career Goal
- Self Confidence

---

## Assessment Chat Interface

Display:

- AI Questions
- Student Responses
- Progress Indicator

---

## Final Report Page

Display:

- Skill Ratings
- Strengths
- Weaknesses
- Recommendations
- Growth Summary

---

# REST API Design

## POST /assessment/start

Creates a new assessment session.

---

## POST /assessment/answer

Receives student answer and generates the next assessment question.

---

## POST /assessment/report

Generates the final assessment report.

---

## GET /assessment/history

Returns previous assessment reports.

---

# Database Tables

## Student

- id
- name
- skills
- interests
- career_goal

---

## AssessmentSession

- id
- student_id
- current_stage
- started_at
- completed_at

---

## AssessmentResponse

- id
- session_id
- question
- answer
- evaluation

---

## AssessmentReport

- id
- session_id
- technical_score
- confidence_score
- communication_score
- problem_solving_score
- learning_mindset_score
- career_readiness_score
- strengths
- weaknesses
- recommendations

---

# Development Milestones

## Milestone 1

Project Planning & Documentation

---

## Milestone 2

Backend Setup

---

## Milestone 3

Gemini Integration

---

## Milestone 4

Assessment Engine

---

## Milestone 5

Frontend Development

---

## Milestone 6

Database Integration

---

## Milestone 7

Testing & Bug Fixes

---

## Milestone 8

Final Review & Deployment

---

# Testing Plan

Testing will include:

- API Testing
- AI Response Validation
- Assessment Flow Testing
- Database Testing
- Frontend Integration Testing
- Error Handling
- Invalid Input Testing

---

# Expected Deliverables

- AI Student Skill Analyzer
- FastAPI Backend
- React Frontend
- Gemini AI Integration
- Student Assessment Engine
- AI-generated Assessment Reports
- Complete Project Documentation
- GitHub Repository