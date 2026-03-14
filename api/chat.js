export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({ error: "Only POST allowed" });
}

try {

const API_KEY = "c36f28a6-9bf1-40f5-afd2-7bfd21145982";

const message = req.body?.message || "Hello";

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
content: "You are Aeron AI created by Shan. Speak friendly Hindi or Hinglish."
},
{
role: "user",
content: message
}
],
max_tokens: 500
})
}
);

const data = await response.json();

if (!response.ok) {
return res.status(500).json(data);
}

res.status(200).json(data);

} catch (error) {

res.status(500).json({
error: "AI server error",
details: error.message
});

}

}
