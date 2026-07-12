import {
  Sparkles,
  Trophy,
  ShieldCheck,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

function ReportPage({
  report,
  setReport,
  setAssessmentData,
}) {
  const rating = Number(report.overall_rating);

let performance = "";
let performanceColor = "";

if (rating >= 9) {
  performance = "Excellent";
  performanceColor = "text-green-400";
} else if (rating >= 8) {
  performance = "Very Good";
  performanceColor = "text-blue-400";
} else if (rating >= 7) {
  performance = "Good";
  performanceColor = "text-yellow-400";
} else if (rating >= 6) {
  performance = "Average";
  performanceColor = "text-orange-400";
} else {
  performance = "Needs Improvement";
  performanceColor = "text-red-400";
}
let ratingCardClass = "";

if (rating >= 9) {
  ratingCardClass =
    "border-green-500/30 bg-green-500/10 shadow-lg shadow-green-500/20";
} else if (rating >= 8) {
  ratingCardClass =
    "border-blue-500/30 bg-slate-800/70 shadow-lg shadow-blue-500/20";
} else if (rating >= 6) {
  ratingCardClass =
    "border-yellow-500/30 bg-yellow-500/10 shadow-lg shadow-yellow-500/20";
} else {
  ratingCardClass =
    "border-red-500/30 bg-red-500/10 shadow-lg shadow-red-500/20";
}
const handleRestart = () => {
  setReport(null);
  setAssessmentData(null);
};
return (
  <div className="min-h-screen bg-slate-950 relative flex justify-center items-center px-6 py-6">

    {/* Background Glow */}
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[180px]" />
    </div>

    {/* Report Card */}
    <div className="relative w-full max-w-3xl max-h-[92vh] rounded-3xl bg-slate-900/95 border border-slate-700 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:shadow-[0_24px_70px_rgba(37,99,235,0.18)] flex flex-col">

      {/* Logo */}
      <div className="flex justify-center mb-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/30">
          <Sparkles className="w-5 h-5 text-blue-400" />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-extrabold text-white text-center">
        InsightAI
      </h1>

      <p className="text-center text-slate-400 mt-1">
        AI Interview Coach
      </p>

      {/* Badge */}
      <div className="mt-4 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/20 px-4 py-2">
          <Trophy className="h-5 w-5 text-green-400" />
          <span className="text-green-300 font-medium">
            Assessment Completed
          </span>
        </div>
      </div>

      {/* Rating */}
      <div
        className={`mt-5 mx-auto w-full max-w-lg rounded-3xl border p-6 transition-all duration-500 ${ratingCardClass}`}
      >
        <p className="text-sm uppercase tracking-widest text-slate-400 text-center">
          Overall Rating
        </p>

        <h2 className="mt-2 text-center text-5xl font-black text-white">
          {report.overall_rating}
          <span className="text-2xl text-blue-400"> / 10</span>
        </h2>

        <p className={`mt-3 text-center text-lg font-semibold ${performanceColor}`}>
          {performance}
        </p>

        <p className="mt-1 text-center text-sm text-slate-400">
          AI evaluation based on your interview responses.
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="mt-5 flex-1 overflow-y-auto pr-2 space-y-4">

        {/* Strengths */}
        <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-4">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-5 w-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">
              Strengths
            </h3>
          </div>

          <div className="space-y-2">
            {report.strengths.map((item, index) => (
              <div key={index} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-green-400"></span>
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Improvement Areas */}
        <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-4">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-5 w-5 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">
              Improvement Areas
            </h3>
          </div>

          <div className="space-y-2">
            {report.improvement_areas.map((item, index) => (
              <div key={index} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange-400"></span>
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-4">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="h-5 w-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">
              Recommendations
            </h3>
          </div>

          <div className="space-y-2">
            {report.recommendations.map((item, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-blue-400 font-semibold">
                  {index + 1}.
                </span>
                <p className="text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Learning Resources */}
        <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-4">

          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="h-5 w-5 text-cyan-400" />

            <h3 className="text-lg font-semibold text-white">
              Learning Resources
            </h3>
          </div>

          <div className="space-y-2">
            {report.learning_resources.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <span className="font-semibold text-cyan-400">
                  {index + 1}.
                </span>

                <p className="text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
        {/* Next Skill */}
        <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-4">

          <h3 className="text-lg font-semibold text-white mb-3">
            🚀 Next Skill to Learn
          </h3>

          <div className="rounded-xl bg-blue-600/10 border border-blue-500/30 p-4 text-center">

            <p className="text-2xl font-bold text-blue-300">
              {report.next_skill}
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="pt-5">
        <p className="text-center text-slate-400 text-sm mb-5">
          🚀 Great effort! Every interview is an opportunity to improve.
          Keep practicing and come back stronger.
        </p>

        <button
          onClick={handleRestart}
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
        >
          Start New Assessment →
        </button>
      </div>

    </div>

  </div>
);
}

export default ReportPage;