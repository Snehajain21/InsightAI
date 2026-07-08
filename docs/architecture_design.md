# Architecture Design

## Project Title

**InsightAI – AI Student Skill Analyzer**

---

# System Overview

InsightAI follows a client-server architecture where the frontend provides a simple chatbot interface, the backend manages user requests and communicates with the Gemini API, and the AI generates both the assessment questions and the final summary report.

The architecture is intentionally kept simple for the initial version while allowing future enhancements.

---

# High-Level Architecture

```
                +----------------------+
                |       Student        |
                +----------+-----------+
                           |
                           v
                +----------------------+
                |    React Frontend    |
                |   (Chat Interface)   |
                +----------+-----------+
                           |
                    HTTP Requests
                           |
                           v
                +----------------------+
                |    FastAPI Backend   |
                +----------+-----------+
                           |
                           v
                +----------------------+
                |    Gemini Service    |
                +----------+-----------+
                           |
                           v
                +----------------------+
                | Google Gemini API    |
                +----------+-----------+
                           |
                           v
                +----------------------+
                | SQLite Database      |
                +----------------------+
```

---

# System Components

## 1. Frontend

The frontend provides a simple chatbot interface where students can:

* Enter one skill or technology (e.g., Python)
* Answer 3–5 assessment questions
* View the final assessment report

**Technology:**

* React.js

---

## 2. Backend

The backend manages the assessment workflow.

Responsibilities:

* Receive user requests
* Validate user input
* Send prompts to the Gemini API
* Receive AI responses
* Generate the final report
* Store assessment results

**Technology:**

* FastAPI

---

## 3. Gemini API

The Gemini API is responsible for:

* Generating assessment questions
* Evaluating student responses
* Generating the final summary report
* Providing learning recommendations

---

## 4. Database

The database stores:

* Student Name
* Selected Skill
* Assessment Responses
* Final Assessment Report

**Technology:**

* SQLite

---

# Assessment Workflow

1. Student enters their name and selects a skill or technology.
2. Backend sends the selected skill to the Gemini API.
3. Gemini generates 3–5 assessment questions.
4. Student answers each question.
5. Backend sends the responses to the Gemini API.
6. Gemini evaluates the responses.
7. The backend generates a summary report.
8. The report is displayed to the student and stored in the database.

---

# Design Principles

* Simple and Modular Architecture
* Separation of Frontend and Backend
* REST API Communication
* Secure Gemini API Integration
* Easy Future Scalability
* Maintainable Code Structure
