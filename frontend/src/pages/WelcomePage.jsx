import { useState } from "react";
import { startAssessment } from "../services/assessmentService";

function WelcomePage({ setAssessmentData })  {
  const [studentName, setStudentName] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("Python");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await startAssessment(studentName, selectedSkill);

      setAssessmentData(data);

        console.log(data);

    } catch (error) {
      console.error(error);
      alert("Unable to start assessment.");
    }
  };

  return (
    <div>
      <h1>InsightAI</h1>
      <h2>AI Interview Coach</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Select Skill</label>
          <br />
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
          >
            <option>Python</option>
            <option>DSA</option>
            <option>HR</option>
          </select>
        </div>

        <br />

        <button type="submit">
          Start Assessment
        </button>
      </form>
    </div>
  );
}

export default WelcomePage;