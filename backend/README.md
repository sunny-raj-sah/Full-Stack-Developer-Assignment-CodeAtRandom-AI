⚙️ CodeAtRandom AI — Backend

A Node.js + Express backend providing APIs for skill gap analysis, career roadmap generation, and fetching the latest tech news.

📌 Overview

This backend powers the full-stack CodeAtRandom AI project with:

🔍 Skill gap analysis based on predefined roles & skills

🛣 Career roadmap generation for user-selected roles

📰 Tech news integration using the HackerNews public API

Data is served via simple REST APIs for smooth frontend integration.

🛠 Tech Stack

Node.js

Express.js

Nodemon (for development)

CORS enabled

JSON-based data storage

skills.json

roadmaps.json

📁 Project Structure
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

🚀 Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/sunny-raj-sah/Full-Stack-Developer-Assignment-CodeAtRandom-AI

2️⃣ Navigate to backend
cd backend

3️⃣ Install dependencies
npm install

4️⃣ Ensure data files exist

✔ data/skills.json
✔ data/roadmaps.json

5️⃣ Start the server

Development mode (auto-reload):

npm run dev

Production mode:

npm start

🖥 Default server URL
http://localhost:5000

🔌 API Endpoints
🔹 1. Skill Gap Analyzer API

URL: /api/skill-gap
Method: POST
Description: Analyzes the user's current skills and finds gaps for the target role.

Request Body:
{
"targetRole": "Backend Developer",
"currentSkills": ["Java", "Git"]
}

Response Example:
{
"matchedSkills": ["Java", "Git"],
"missingSkills": ["Spring Boot", "SQL", "APIs"],
"recommendations": [
"Learn Spring Boot via official docs and tutorials",
"Learn SQL via official docs and tutorials",
"Learn APIs via official docs and tutorials"
],
"suggestedLearningOrder": [
"Java",
"Git",
"Spring Boot",
"SQL",
"APIs"
]
}

🔹 2. Career Roadmap Generator API

URL: /api/roadmap
Method: POST
Description: Returns a 3-phase roadmap for the chosen role.

Request Body:
{
"targetRole": "Backend Developer"
}

Response Example:
[
{ "phase": "Phase 1 (1-2 months)", "topics": ["Java basics", "OOP", "Git"] },
{ "phase": "Phase 2 (2 months)", "topics": ["Spring Boot", "SQL", "APIs"] },
{ "phase": "Phase 3 (1-2 months)", "topics": ["Deployment", "Projects", "System Design Basics"] }
]

🔹 3. Latest Tech News API

URL: /api/news
Method: GET
Description: Fetches top 5 trending tech stories from HackerNews.

Response Example:

Each story includes:

title

url

score

time

type

by

🧪 Testing APIs with Postman
✔ Skill Gap API

Method: POST

URL: http://localhost:5000/api/skill-gap

Body: raw JSON

✔ Roadmap API

Method: POST

URL: http://localhost:5000/api/roadmap

✔ News API

Method: GET

URL: http://localhost:5000/api/news

📝 Notes

Basic input validation implemented — ensure valid JSON inputs.

Backend runs using ES Modules.

CORS enabled for frontend communication.

No authentication or sessions included.
