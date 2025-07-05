const axios = require("axios");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function getGeminiRecommendation(message) {
  const prompt = `Based on this request, suggest a book and give a short review:
"${message}"`;

  const response = await axios.post(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + GEMINI_API_KEY,
    {
      contents: [{ parts: [{ text: prompt }] }]
    }
  );

  const output = response.data.candidates[0].content.parts[0].text;
  return { reply: output };
}

module.exports = { getGeminiRecommendation };
