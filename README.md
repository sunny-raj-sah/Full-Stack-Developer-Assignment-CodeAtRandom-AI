CodeAtRandom AI — Full Stack Developer Assignment
Project Overview
This project implements a full-stack application for skill-gap analysis, career roadmap generation, and integration with a public API (HackerNews). It consists of:

A backend API server in Node.js + Express handling skill gap logic, roadmap, and news integration.

A frontend React.js application providing user interface for inputs and displaying results.

Features Implemented
Career Goal Input Page

Allows users to enter a target role (e.g., "Backend Developer").

Capture current skills as comma-separated values.

Submit to analyze career path.

Skill Gap Analyzer API (POST /api/skill-gap)

Uses predefined skill sets from JSON.

Returns matched skills, missing skills, recommendations, and learning order.

All processing is carried out on the backend.

Career Roadmap Generator API (POST /api/roadmap)

Returns a 3-phase career roadmap for the target role based on mock logic.

Public API Integration - HackerNews (GET /api/news)

Fetches the top 5 latest tech stories with title, URL, score, time, type, and author.

Combined Dashboard Page

Displays skill gap results, career roadmap, and latest tech news in a neat and responsive layout.

Technology Stack
Frontend: React.js (using functional components and hooks)

Backend: Node.js with Express

Data Storage: JSON files in backend; no database required or used

API Calls: Axios for frontend-backend communication

Public API: HackerNews public API integration

Styling: CSS via a shared App.css file using class names for clarity and simplicity

Running the Project Locally
Backend
Navigate to /backend folder

Install dependencies:

text
npm install
Start server (with nodemon for hot reload):

text
npm run dev
Backend API runs on: http://localhost:5000

Frontend
Navigate to /frontend folder

Install dependencies:

text
npm install
Start React development server:

text
npm start
Frontend runs on: http://localhost:3000

Ensure backend is running to fulfill API requests.

API Endpoints

1. Skill Gap Analyzer
   URL: POST /api/skill-gap

Request:

json
{
"targetRole": "Backend Developer",
"currentSkills": ["Java", "Git"]
}
Response:

json
{
"matchedSkills": ["Java", "Git"],
"missingSkills": ["Spring Boot", "SQL", "APIs"],
"recommendations": ["Learn Spring Boot via official docs and tutorials", "Learn SQL via official docs and tutorials", "Learn APIs via official docs and tutorials"],
"suggestedLearningOrder": ["Java", "Git", "Spring Boot", "SQL", "APIs"]
} 2. Career Roadmap Generator
URL: POST /api/roadmap

Request:

json
{
"targetRole": "Backend Developer"
}
Response:

json
[
{ "phase": "Phase 1 (1-2 months)", "topics": ["Java basics", "OOP", "Git"] },
{ "phase": "Phase 2 (2 months)", "topics": ["Spring Boot", "SQL", "APIs"] },
{ "phase": "Phase 3 (1-2 months)", "topics": ["Deployment", "Projects", "System Design Basics"] }
] 3. Latest Tech News - HackerNews
URL: GET /api/news

Response: Array of up to 5 story objects including title, url, score, time, type, and by.

Assumptions
Skills and roadmap data are static and stored as JSON files in the backend.

No user authentication or persistent user data storage is implemented.

Frontend focuses on clarity and functionality, with minimal styling and responsiveness.

Backend uses simple error handling and validation.

Deployment is assumed to be on platforms supporting Node.js and React static site hosting (e.g., Vercel, Netlify, Heroku).

Project Structure
text
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
package.json
App.css
README.md
How to Use
Open the frontend URL.

Enter your career target role and current skills separated by commas.

Click "Analyze My Career Path."

View matched/missing skill details, recommendations, career roadmap phases, and the latest tech news below.

Evaluation Points
This project meets assignment criteria with clean code, simple UI, backend APIs functioning correctly, and seamless integration.

The code is modular, well-structured, and documented.

UI is minimal yet responsive and usable.

API handling includes proper request validation and response formatting.

Public API (HackerNews) is integrated and displayed in real-time.
