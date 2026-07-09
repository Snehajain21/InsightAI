import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const startAssessment = async (studentName, selectedSkill) => {
  const response = await API.post("/assessment/start", {
    student_name: studentName,
    selected_skill: selectedSkill,
  });

  return response.data;
};

export const submitAnswer = async (
  sessionId,
  questionNumber,
  question,
  answer
) => {
  const response = await API.post("/assessment/answer", {
    session_id: sessionId,
    question_number: questionNumber,
    question: question,
    answer: answer,
  });

  return response.data;
};