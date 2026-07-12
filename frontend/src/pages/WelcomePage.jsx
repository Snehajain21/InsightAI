import { useState } from "react";
import { startAssessment } from "../services/assessmentService";
import { Sparkles, LoaderCircle } from "lucide-react";
function WelcomePage({ setAssessmentData })  {
  const [studentName, setStudentName] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("Python");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!studentName.trim()) {
  alert("Please enter your name.");
  return;
}

    setLoading(true);

    try {
      const data = await startAssessment(
    studentName.trim(),
    selectedSkill
);
      setAssessmentData(data);

    } catch (error) {
      console.error(error);
      alert("Unable to start assessment. Please try again.");

    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen bg-slate-950 relative flex items-center justify-center px-6 overflow-hidden">
    <div className="absolute inset-0">
  <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[180px]"></div>
</div>
    <div className="relative w-full max-w-2xl   min-h-[700px] rounded-3xl bg-slate-900/95 border border-slate-700 px-8 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_24px_70px_rgba(37,99,235,0.18)]">

      <div className="flex justify-center mb-4">
    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30">
      <Sparkles className="w-7 h-7 text-blue-400" />
    </div>
  </div>

  <h1 className="text-5xl font-extrabold text-white text-center tracking-tight">
    InsightAI
  </h1>

  <p className="text-slate-300 text-center mt-3 text-lg  mb-8">
    AI Interview Coach
  </p>

  <p className="text-slate-400 text-center text-sm leading-6 mt-3 mb-10">
    Practice technical interviews with AI-powered
    personalized feedback and receive intelligent
    performance insights.
  </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <div>
            <label
              htmlFor="studentName"
              className="block text-slate-300 mb-2"
            >
              Student Name
            </label>

          <input
            type="text"
            autoFocus
            id="studentName"
            placeholder="Enter your name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20"
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-2">
            Interview Topic
          </label>

          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20"
          >
            <option>Python</option>
            <option>DSA</option>
            <option>HR</option>
          </select>
        </div>

      <button
      type="submit"
      disabled={loading}
      className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-2"
    >
      {loading ? (
        <>
          <LoaderCircle className="h-5 w-5 animate-spin" />
          Generating Questions...
        </>
      ) : (
        "Start Assessment →"
      )}
    </button>

      </form>

    </div>
  </div>
);
}

export default WelcomePage;