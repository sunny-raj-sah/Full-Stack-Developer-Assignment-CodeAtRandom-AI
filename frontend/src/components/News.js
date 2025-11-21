import React, { useEffect, useState } from "react";
import "../App.css";
import { fetchLatestNews } from "../utils/api";

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const latestNews = await fetchLatestNews();
        setNews(latestNews);
      } catch {
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) return <p className="message">Loading latest tech news...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <h2 className="section-heading">Latest Tech News</h2>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
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
    </div>
  );
}
