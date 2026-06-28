# Project Requirements

## Project Title

**InsightAI – AI Student Skill Analyzer**

---

# Functional Requirements

The system shall provide the following functionalities:

## 1. Student Profile Collection

The chatbot shall allow the student to enter:

- Name
- One skill or technology to be assessed (e.g., Python, Java, SQL)

---

## 2. AI-Based Assessment

The chatbot shall conduct a simple AI-powered assessment using a fixed sequence of **3–5 questions** related to the student's selected skill or technology.

For the initial version (MVP), the assessment will focus on evaluating:

* Technical Knowledge
* Problem-Solving Ability
* Confidence Level

Based on the student's responses, the chatbot will generate a concise summary report highlighting strengths, areas for improvement, and an overall rating.

---

## 3. Assessment Question Flow

The chatbot shall present a predefined sequence of assessment questions.

The assessment flow will be:

1. Student enters a skill or technology (e.g., Python, Java, SQL).
2. The chatbot asks 3–5 predefined assessment questions related to that skill.
3. The student answers each question.
4. Gemini API evaluates the responses.
5. The chatbot generates a summary report containing:

   * Overall Rating
   * Strengths
   * Areas for Improvement
   * Learning Recommendations

Adaptive questioning, personalized question generation, and multi-stage assessments will be considered as future enhancements.


---

## 4. Response Evaluation

The chatbot shall evaluate each response based on:

- Technical understanding
- Correctness of the answer
- Areas requiring improvement

---

## 5. Student Skill Profile Generation
After the assessment, the chatbot shall generate a summary containing:

- Technical strengths
- Areas for improvement
- Overall rating
- Learning recommendations

---

## 6. Recommendation System
The chatbot shall recommend:

- Topics to improve
- Suggested learning resources
- Next technology to learn

---

## 7. Assessment Report

The final report shall include:

- Overall Rating
- Strengths
- Areas for Improvement
- Learning Recommendations

---

# Non-Functional Requirements

The system should satisfy the following quality requirements:

- Fast response time
- User-friendly interface
- Modular backend architecture
- Scalable design
- Secure API key management
- Maintainable codebase
- Responsive frontend

---

# Assumptions

- Users have internet connectivity.
- Users provide genuine responses.
- Gemini API is available.
- AI responses are used for guidance only and are not official certifications.

---

# Constraints

- Assessment quality depends on user responses.
- Free-tier Gemini API limitations may apply.
- Initial version supports only Computer Science students.
- Internet connection is required.

---

# Future Enhancements

- Resume Analysis
- Authentication
- Voice-based Assessment
- Assessment History Dashboard
- Multi-domain Skill Assessment
- Performance Analytics