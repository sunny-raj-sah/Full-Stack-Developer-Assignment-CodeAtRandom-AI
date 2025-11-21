CodeAtRandom AI Frontend - README
Overview
This React.js frontend application provides the user interface for the Full Stack Developer Assignment. It allows users to input their career goals and current skills, then displays their skill gap analysis, career roadmap, and latest tech news fetched from the backend APIs.

Features
Career Goal Input Page
Users can enter:

Target Role (text input, e.g., "Backend Developer")

Current Skills (comma-separated text input)

Click "Analyze My Career Path" button to submit.

Combined Dashboard Page
Displays:

Skill Gap Results with matched and missing skills and recommendations

Three-level Career Roadmap for the selected role

Latest Technology News fetched via HackerNews API

Technology Stack
React.js with functional components and hooks

Axios for backend API calls

Plain CSS styling via imported App.css

No state management libraries used (simple props and state hooks)

Project Structure
text
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
Setup Instructions
Open terminal, navigate to frontend directory.

Run dependencies install:

bash
npm install
Start development server:

bash
npm start
Open browser to http://localhost:3000.
Make sure backend server is running on http://localhost:5000 to enable API calls.

API Endpoints Used
POST /api/skill-gap – to get skill gap analysis results.

POST /api/roadmap – to get the career roadmap.

GET /api/news – to get the latest technology news.

Usage
Enter your target role and current skills on the input page.

Submit to see the combined dashboard with skill gap, roadmap, and news.

UI is minimalistic and responsive.

Styling and UI
Simple responsive layout using CSS in App.css.

Clean, easy-to-read results display.

No external UI libraries to keep dependencies minimal.

Assumptions & Notes
The frontend expects backend APIs to respond with specified JSON shape.

No authentication or persistent login features implemented.

User inputs are validated minimally to ensure required fields are filled.

This frontend can be deployed on any static hosting supporting React apps (e.g., Vercel, Netlify).
