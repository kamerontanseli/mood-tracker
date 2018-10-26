import express from "express";

export const Insights = () => {
  const insights = [];

  return {
    all: () => insights,
    add: insight => insights.unshift({ ...insight, date: Date.now() })
  };
};

export const getInsights = insights => (_, res) =>
  res.send(
    insights
      .all()
      .slice(0, 10)
  );

export const postInsights = insights => (req, res) => {
  insights.add(req.body);
  res.send({ done: true });
};

const insights = Insights();
const router = express.Router();
router.get("/", getInsights(insights));
router.post("/", postInsights(insights));

export default router;
