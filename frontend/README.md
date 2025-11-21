🎯 CodeAtRandom AI — Frontend

A React-based frontend application for the Full Stack Developer Assignment, enabling users to analyze their career goals, identify skill gaps, and view a structured career roadmap along with the latest tech news.

📌 Overview

This React.js frontend provides an intuitive user interface to interact with backend APIs.
Users can:

Enter career goals

Provide current skills

Receive skill gap analysis

View career roadmap

Read latest tech news (HackerNews API via backend)

All results are fetched from the backend and displayed in a clean, minimal UI.

✨ Features
📝 Career Goal Input Page

Allows users to enter:

Target Role (e.g., Backend Developer)

Current Skills (comma-separated)

With a button:
Analyze My Career Path

📊 Combined Dashboard Page

Displays three key sections:

🔹 1. Skill Gap Results

Shows:

Matched skills

Missing skills

Personalized recommendations

🔹 2. Career Roadmap

Three-level progression for the selected role.

🔹 3. Latest Tech News

Fetched from HackerNews API via backend GET /api/news.

🛠 Technology Stack

React.js (Functional Components + Hooks)

Axios for API calls

Plain CSS via App.css

No external UI libraries (minimal dependency footprint)

📁 Project Structure
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

🚀 Setup Instructions

Open terminal and navigate to the frontend folder.

Install dependencies:

npm install

Start the development server:

npm start

Open the app in the browser:
👉 http://localhost:3000

⚠ Backend Requirement

Make sure the backend is running at:

http://localhost:5000

Otherwise, API calls will fail.

🔌 API Endpoints Used
Method Endpoint Description
POST /api/skill-gap Returns skill gap analysis
POST /api/roadmap Generates a career roadmap
GET /api/news Fetches tech news from HackerNews
💡 Usage Flow

Enter your target role and skills.

Submit the form.

View the Skill Gap, Roadmap, and Latest Tech News on the dashboard.

UI is simple, clean, and responsive.

🎨 Styling & UI

Minimalistic CSS via App.css

Clean layout

No external UI frameworks

Fully responsive design

📚 Assumptions & Notes

Backend must return data in expected JSON format.

Minimal input validation (fields must not be empty).

No authentication implemented.

Can be deployed on any React-compatible static host:

Vercel (recommended)

GitHub Pages
