import express from "express";
import cors from "cors";
import skillGapRoute from "./routes/skillGap.js";
import roadmapRoute from "./routes/roadmap.js";
import newsRoute from "./routes/news.js";

const app = express();

const allowedOrigins = [
  "http://localhost:3000", // Local React frontend
  "https://your-frontend-vercel-url.vercel.app", // Replace with your deployed frontend URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Allow non-browser requests like Postman
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("CORS policy: This origin is not allowed"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/skill-gap", skillGapRoute);
app.use("/api/roadmap", roadmapRoute);
app.use("/api/news", newsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
