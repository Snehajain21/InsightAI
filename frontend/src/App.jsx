import { useState } from "react";
import WelcomePage from "./pages/WelcomePage";
import InterviewPage from "./pages/InterviewPage";

function App() {
  const [assessmentData, setAssessmentData] = useState(null);

  if (assessmentData) {
    return (
      <InterviewPage
        assessmentData={assessmentData}
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