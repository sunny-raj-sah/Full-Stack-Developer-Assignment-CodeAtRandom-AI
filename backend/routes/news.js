import express from "express";
import fetch from "node-fetch";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const idsRes = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );
    const ids = await idsRes.json();
    const five = ids.slice(0, 5);
    const items = await Promise.all(
      five.map(async (id) => {
        const detail = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        return detail.json();
      })
    );
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});
export default router;
