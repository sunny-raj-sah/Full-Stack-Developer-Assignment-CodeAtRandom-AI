CodeAtRandom AI Backend README

Overview
This backend provides APIs for:

Skill gap analysis based on user input and predefined skills.

Career roadmap generation for specified roles.

Latest tech news fetched from HackerNews public API.

Tech Stack
Node.js with Express

Uses JSON files for data storage (skills.json and roadmaps.json)

Public API integration (HackerNews)

CORS enabled

Setup Instructions
Clone or download the repository.

Navigate to the /backend folder.

Run npm install to install dependencies.

Ensure the /data directory contains skills.json and roadmaps.json.

Start the server:

bash
npm run dev # for development with nodemon

# or

npm start # for running normally
Backend will run on http://localhost:5000 by default.

API Endpoints

1. Skill Gap Analyzer
   URL: /api/skill-gap

Method: POST

Description: Analyzes skill gaps for a target role based on user's current skills.

Request Body:

json
{
"targetRole": "Backend Developer",
"currentSkills": ["Java", "Git"]
}
Response: JSON object containing:

matchedSkills (Array)

missingSkills (Array)

recommendations (Array of strings)

suggestedLearningOrder (Array)

2. Career Roadmap Generator
   URL: /api/roadmap

Method: POST

Description: Returns a 3-phase career roadmap for the specified role.

Request Body:

json
{
"targetRole": "Backend Developer"
}
Response: Array of roadmap phases, each with:

phase (String)

topics (Array of strings)

3. Latest Tech News (HackerNews Integration)
   URL: /api/news

Method: GET

Description: Fetches the top 5 latest tech stories from HackerNews.

Response: Array of news item objects including:

title, url, score, time, type, by

Testing APIs with Postman
Skill Gap API

Method: POST

URL: http://localhost:5000/api/skill-gap

Body: raw JSON example (see above)

Send request and check response fields as described.

Roadmap API

Method: POST

URL: http://localhost:5000/api/roadmap

Body: raw JSON example (see above)

Expect roadmap phases as response.

News API

Method: GET

URL: http://localhost:5000/api/news

No body needed.

Expect array of latest tech news items.

Notes
Input validation is minimal; ensure proper JSON structure in requests.

Backend supports JSON data only and runs with ES modules.

No authentication included.

CORS enabled to allow frontend interaction.
