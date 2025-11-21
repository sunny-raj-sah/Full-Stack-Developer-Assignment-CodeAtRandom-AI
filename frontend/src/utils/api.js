import axios from "axios";

const backendBaseURL = "http://localhost:5000/api";

export const analyzeSkillGap = (targetRole, currentSkills) =>
  axios
    .post(`${backendBaseURL}/skill-gap`, { targetRole, currentSkills })
    .then((res) => res.data);

export const getRoadmap = (targetRole) =>
  axios
    .post(`${backendBaseURL}/roadmap`, { targetRole })
    .then((res) => res.data);

export const fetchLatestNews = () =>
  axios.get(`${backendBaseURL}/news`).then((res) => res.data);
