import { useState } from "react";
import {
  submitAnswer,
  generateReport,
} from "../services/assessmentService";
import { LoaderCircle, Sparkles } from "lucide-react";

function InterviewPage({
  assessmentData,
  setReport,
}) {
  const [question, setQuestion] = useState(
    assessmentData.first_question
  );
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChangingQuestion, setIsChangingQuestion] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!answer.trim()) {
      alert("Please enter your answer.");
      return;
    }

    try {
      setLoading(true);

      const data = await submitAnswer(
        assessmentData.session_id,
        questionNumber,
        question,
        answer
      );

     

      if (data.completed) {
        const report = await generateReport(
          assessmentData.session_id
        );

        setReport(report);
        setLoading(false);
      } else {
        setIsChangingQuestion(true);

        setTimeout(() => {
          setQuestion(data.next_question);
          setQuestionNumber((prev) => prev + 1);
          setAnswer("");
          setLoading(false);
          setIsChangingQuestion(false);
        }, 300);
      }
    } catch (error) {
      setLoading(false);

      console.error("Axios Error:", error);

      if (error.response) {
       
        alert("Something went wrong while submitting your answer. Please try again.");
      } else if (error.request) {
       
     alert("Something went wrong while submitting your answer. Please try again.");
      } else {
        console.log("Error:", error.message);
       alert("Something went wrong while submitting your answer. Please try again.");
      }
    }
  };
return (
  <div className="min-h-screen bg-slate-950 relative flex items-center justify-center px-6 overflow-hidden">
    <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900/95 border border-slate-700 p-7 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:shadow-[0_22px_60px_rgba(37,99,235,0.08)]">

      {/* Logo */}
      <div className="flex justify-center mb-2">
        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30">
          <Sparkles className="w-6 h-6 text-blue-400" />
        </div>
      </div>

      <h1 className="text-3xl font-extrabold text-white text-center tracking-tight">
        InsightAI
      </h1>

      <p className="text-slate-300 text-center mt-1 text-sm mb-5">
        AI Interview Coach
      </p>

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          Technical Interview
        </h2>

        <span className="text-sm text-slate-400">
          {questionNumber} / 5
        </span>
      </div>

      {/* Progress */}
      <div className="mt-3 h-2 w-full rounded-full bg-slate-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-500"
          style={{
            width: `${(questionNumber / 5) * 100}%`,
          }}
        />
      </div>

      {/* Question */}
      <h3 className="mt-5 mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
        Interview Question
      </h3>

      <div
        className={`rounded-2xl border border-blue-500/20 bg-slate-800/80 p-5 shadow-lg shadow-blue-500/5 transition-all duration-300 ${
          isChangingQuestion
            ? "opacity-0 translate-y-2"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold shadow-lg shadow-blue-500/30">
            ✨
          </div>

          <p className="text-slate-200 leading-7">
            {question}
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-5">

        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
          Your Answer
        </h3>

        <textarea
          rows="8"
          placeholder="Write your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full rounded-2xl border border-slate-700 bg-slate-800 p-4 text-white placeholder:text-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 resize-none"
        />

        <div className="mt-2 flex justify-between items-center">
          <span className="text-xs text-slate-500">
            Write a detailed answer.
          </span>

          <span className="text-sm text-slate-400">
            {answer.length} characters
          </span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <LoaderCircle className="h-5 w-5 animate-spin" />
              Submitting Answer...
            </>
          ) : (
            "Submit Answer →"
          )}
        </button>

      </form>
    </div>
  </div>
);
}

export default InterviewPage;