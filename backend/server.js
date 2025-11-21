import express from "express";
import cors from "cors";
import skillGapRoute from "./routes/skillGap.js";
import roadmapRoute from "./routes/roadmap.js";
import newsRoute from "./routes/news.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/skill-gap", skillGapRoute);
app.use("/api/roadmap", roadmapRoute);
app.use("/api/news", newsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
