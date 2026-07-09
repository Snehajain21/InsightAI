import { useState } from "react";
import { submitAnswer } from "../services/assessmentService";

function InterviewPage({ assessmentData }) {
  const [question, setQuestion] = useState(assessmentData.first_question);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = await submitAnswer(
      assessmentData.session_id,
      questionNumber,
      question,
      answer
    );

    console.log("Response from backend:", data);

    if (data.completed) {
      alert("Interview Completed!");
      console.log(data);
    } else {
      setQuestion(data.next_question);
      setQuestionNumber((prev) => prev + 1);
      setAnswer("");
    }

  } catch (error) {
    console.error("Axios Error:", error);

    if (error.response) {
      console.log("Backend Response:", error.response.data);
      alert(JSON.stringify(error.response.data));
    } else if (error.request) {
      console.log("No response received:", error.request);
      alert("No response received from backend.");
    } else {
      console.log("Error:", error.message);
      alert(error.message);
    }
  }
};
  return (
    <div>
      <h1>Interview Started</h1>

      <h3>Question {questionNumber}</h3>

      <p>{question}</p>

      <form onSubmit={handleSubmit}>
        <textarea
          rows="6"
          cols="60"
          placeholder="Write your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Submit Answer
        </button>
      </form>
    </div>
  );
}

export default InterviewPage;