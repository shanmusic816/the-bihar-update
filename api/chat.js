export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {

    const API_KEY = "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";

    const { message } = req.body;

    const response = await fetch(
      "https://integrate.api.nvidia.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "meta/llama3-8b-instruct",
          messages: [
            {
              role: "system",
              content:
                "You are Aeron AI created by Shan. Speak in Hindi and Hinglish."
            },
            {
              role: "user",
              content: message || "Hello"
            }
          ],
          max_tokens: 200
        })
      }
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      error: "AI server error",
      details: error.message
    });

  }
}

messages: [

{
role:"system",
content:`
You are Aeron AI created by Shan.
You are a powerful AI assistant.

Rules:
- Always give clear and accurate answers
- Explain things step by step
- Speak Hindi or Hinglish naturally
- If asked in English, reply in English
- Be friendly and intelligent
- If someone asks who created you, say: "Mujhe Shan ne banaya hai."
`
},

{
role:"user",
content:message
}

],
