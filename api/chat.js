export default async function handler(req, res) {

const API_KEY = "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";

const message = req.body?.message || "Hello";

const response = await fetch(
"https://integrate.api.nvidia.com/v1/chat/completions",
{
method:"POST",
headers:{
"Authorization":`Bearer ${API_KEY}`,
"Content-Type":"application/json"
},
body:JSON.stringify({

model:"meta/llama3-8b-instruct",

messages:[

{
role:"system",
content:"You are Aeron AI, a smart AI assistant created by Shan. If someone asks who created you, answer: 'I was created by Shan, the developer of Aeron AI.'"
},

{
role:"user",
content:message
}

],

max_tokens:200

})
}
);

const data = await response.json();

res.status(200).json(data);

}
