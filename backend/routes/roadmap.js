import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const roadmapFilePath = path.join(__dirname, "../data/roadmaps.json");

router.post("/", async (req, res) => {
  const { targetRole } = req.body;
  if (!targetRole) {
    return res.status(400).json({ error: "targetRole is required" });
  }
  try {
    const roadmapRaw = await fs.readFile(roadmapFilePath, "utf-8");
    const roadmapData = JSON.parse(roadmapRaw);
    const roadmap = roadmapData[targetRole] || [
      { phase: "No roadmap", topics: [] },
    ];
    res.json(roadmap);
  } catch (err) {
    res.status(500).json({ error: "Failed to read roadmap data" });
  }
});

export default router;
