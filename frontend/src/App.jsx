import { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import InterviewPage from "./pages/InterviewPage";
import ReportPage from "./pages/ReportPage";

function App() {
  const [assessmentData, setAssessmentData] = useState(null);
  const [report, setReport] = useState(null);

  if (report) {
   return (
  <ReportPage
    report={report}
    setReport={setReport}
    setAssessmentData={setAssessmentData}
  />
);
  }

  if (assessmentData) {
    return (
      <InterviewPage
        assessmentData={assessmentData}
        setReport={setReport}
      />
    );
  }

  return (
    <WelcomePage
      setAssessmentData={setAssessmentData}
    />
  );
}

export default App;