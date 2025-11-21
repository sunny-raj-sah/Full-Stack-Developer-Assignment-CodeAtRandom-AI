import "./App.css";
import React, { useState } from "react";
import CareerInputForm from "./components/CareerInputForm";
import Dashboard from "./components/Dashboard";
import { analyzeSkillGap, getRoadmap, fetchLatestNews } from "./utils/api";

function App() {
  const [skillGap, setSkillGap] = useState(null);
  const [roadmap, setRoadmap] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async ({ targetRole, currentSkills }) => {
    setLoading(true);
    setError(null);
    try {
      const [gap, map, latestNews] = await Promise.all([
        analyzeSkillGap(targetRole, currentSkills),
        getRoadmap(targetRole),
        fetchLatestNews(),
      ]);
      setSkillGap(gap);
      setRoadmap(map);
      setNews(latestNews);
    } catch (e) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Career Skill-Gap Analysis Tool</h1>
      <CareerInputForm onSubmit={handleAnalyze} />
      {loading && <p>Loading results...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {skillGap && roadmap && news && (
        <Dashboard skillGap={skillGap} roadmap={roadmap} news={news} />
      )}
    </div>
  );
}

export default App;
