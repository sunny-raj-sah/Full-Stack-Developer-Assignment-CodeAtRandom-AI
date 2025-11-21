import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const skillsFilePath = path.join(__dirname, "../data/skills.json");

function analyzeGap(role, userSkills, skillsData) {
  const required = skillsData[role] || [];
  const matched = userSkills.filter((s) => required.includes(s));
  const missing = required.filter((s) => !userSkills.includes(s));

  const recommended = missing.map(
    (skill) => `Learn ${skill} via official docs and tutorials`
  );

  return {
    matchedSkills: matched,
    missingSkills: missing,
    recommendations: recommended,
    suggestedLearningOrder: [...matched, ...missing]
  };
}

router.post("/", async (req, res) => {
  const { targetRole, currentSkills } = req.body;
  if (!targetRole || !Array.isArray(currentSkills)) {
    return res.status(400).json({ error: "Invalid input" });
  }

  try {
    const skillsDataRaw = await fs.readFile(skillsFilePath, "utf-8");
    const skillsData = JSON.parse(skillsDataRaw);
    const result = analyzeGap(targetRole, currentSkills, skillsData);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to process skill gap analysis" });
  }
});

export default router;
