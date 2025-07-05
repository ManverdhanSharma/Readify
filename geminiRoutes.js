const express = require("express");
const axios = require("axios");
const { getGeminiRecommendation } = require("../utils/geminiClient");

const router = express.Router();

router.post("/recommend", async (req, res) => {
  const userInput = req.body.message;
  try {
    const geminiResponse = await getGeminiRecommendation(userInput);
    res.json(geminiResponse);
  } catch (error) {
    res.status(500).json({ error: "Gemini API failed" });
  }
});

module.exports = router;
