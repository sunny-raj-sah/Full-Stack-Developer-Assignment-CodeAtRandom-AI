🚀 CodeAtRandom AI — Full Stack Developer Assignment

A full-stack application that analyzes skill gaps, generates a career roadmap, and integrates real-time tech news using the HackerNews API.

This project includes:

Backend (Node.js + Express) for skill-gap logic, roadmap generation, and public API integration

Frontend (React.js) for an interactive UI and results dashboard

📌 Features
✅ Career Goal Input

Enter a target role (e.g., Backend Developer)

Add current skills as comma-separated values

Sends data to backend for analysis

✅ Skill Gap Analyzer API (POST /api/skill-gap)

Uses predefined JSON skill data

Returns:

Matched skills

Missing skills

Recommendations

Suggested learning order

✅ Career Roadmap Generator API (POST /api/roadmap)

Returns a structured 3-phase roadmap for any role

Fully backend-generated using static JSON

✅ HackerNews Integration (GET /api/news)

Fetches latest top 5 tech stories

Returns title, link, score, timestamp, type, and author

✅ Combined Dashboard

One page showing:

Skill gap analysis

Career roadmap

Latest tech news

Fully responsive UI

🛠️ Tech Stack
Layer Technology
Frontend React.js (hooks, components)
Backend Node.js, Express
Storage JSON files (no DB required)
API Calls Axios
Public API HackerNews
Styling Simple CSS (App.css)
⚙️ Running the Project Locally
🔹 Backend Setup
cd backend
npm install
npm run dev

Backend runs at: http://localhost:5000

🔹 Frontend Setup
cd frontend
npm install
npm start

Frontend runs at: http://localhost:3000

Ensure backend is running for the frontend to fetch data.

📡 API Endpoints
1️⃣ Skill Gap Analyzer

POST /api/skill-gap

Request

{
"targetRole": "Backend Developer",
"currentSkills": ["Java", "Git"]
}

Response

{
"matchedSkills": ["Java", "Git"],
"missingSkills": ["Spring Boot", "SQL", "APIs"],
"recommendations": [
"Learn Spring Boot via official docs and tutorials",
"Learn SQL via official docs and tutorials",
"Learn APIs via official docs and tutorials"
],
"suggestedLearningOrder": ["Java", "Git", "Spring Boot", "SQL", "APIs"]
}

2️⃣ Career Roadmap Generator

POST /api/roadmap

Request

{
"targetRole": "Backend Developer"
}

Response

[
{ "phase": "Phase 1 (1-2 months)", "topics": ["Java basics", "OOP", "Git"] },
{ "phase": "Phase 2 (2 months)", "topics": ["Spring Boot", "SQL", "APIs"] },
{ "phase": "Phase 3 (1-2 months)", "topics": ["Deployment", "Projects", "System Design Basics"] }
]

3️⃣ Latest Tech News — HackerNews

GET /api/news

Response

Array of up to 5 story objects:

title

url

score

time

type

by

📂 Project Structure
/backend
/data
skills.json
roadmaps.json
/routes
skillGap.js
roadmap.js
news.js
server.js
package.json

/frontend
/src
/components
CareerInputForm.js
Dashboard.js
News.js
/utils
api.js
App.js
index.js
App.css
package.json

README.md

🧑‍💻 How to Use

Open the frontend (http://localhost:3000
)

Enter:

Your target career role

Your current skills

Click Analyze My Career Path

View:

Matched + missing skills

Recommendations

Learning order

Multi-phase career roadmap

Live HackerNews tech stories

✔️ Evaluation Points

Complete full-stack assignment

Clean code & project structure

Fully working backend APIs

Functional and responsive UI

Real-time public API integration

Proper request validation and clear responses
