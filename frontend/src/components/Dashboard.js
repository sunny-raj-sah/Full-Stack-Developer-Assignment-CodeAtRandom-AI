import React from "react";
import "../App.css";

export default function Dashboard({ skillGap, roadmap, news }) {
  return (
    <div className="dashboard-container">
      <section className="dashboard-section">
        <h2 className="section-heading">Skill Gap Results</h2>
        <div>
          <strong>Matched Skills:</strong>{" "}
          {skillGap.matchedSkills.join(", ") || "None"}
        </div>
        <div>
          <strong>Missing Skills:</strong>{" "}
          {skillGap.missingSkills.join(", ") || "None"}
        </div>
        <div>
          <strong>Recommendations:</strong>
          <ul>
            {skillGap.recommendations.map((rec, idx) => (
              <li key={idx}>{rec}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dashboard-section">
        <h2 className="section-heading">Career Roadmap</h2>
        {roadmap.map((phase, idx) => (
          <div key={idx}>
            <h3>{phase.phase}</h3>
            <ul>
              {phase.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="dashboard-section" style={{ flexBasis: "100%" }}>
        <h2 className="section-heading">Latest Tech News</h2>
        <ul>
          {news.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                {item.title}
              </a>
              <div>
                Score: {item.score} | Type: {item.type} | By: {item.by}
              </div>
              <div>{new Date(item.time * 1000).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
