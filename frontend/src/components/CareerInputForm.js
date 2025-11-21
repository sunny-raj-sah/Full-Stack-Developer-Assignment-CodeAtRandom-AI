import React, { useState } from "react";
import "../App.css";

export default function CareerInputForm({ onSubmit }) {
  const [targetRole, setTargetRole] = useState("");
  const [currentSkills, setCurrentSkills] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const skillsArr = currentSkills
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    onSubmit({ targetRole, currentSkills: skillsArr });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="label" htmlFor="targetRole">
        Target Role:
      </label>
      <input
        className="input"
        type="text"
        id="targetRole"
        value={targetRole}
        onChange={(e) => setTargetRole(e.target.value)}
        required
        placeholder="e.g. Backend Developer"
      />

      <label className="label" htmlFor="currentSkills">
        Current Skills (comma separated):
      </label>
      <input
        className="input"
        type="text"
        id="currentSkills"
        value={currentSkills}
        onChange={(e) => setCurrentSkills(e.target.value)}
        placeholder="e.g. JavaScript, React, Git"
      />

      <button className="button" type="submit">
        Analyze My Career Path
      </button>
    </form>
  );
}
