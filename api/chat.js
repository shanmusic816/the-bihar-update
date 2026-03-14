export default async function handler(req, res) {

try {

const API_KEY = "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";

const body = req.body ? req.body : { message: "Hello" };

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
{ role: "user", content: body.message }
],
max_tokens: 200
})
}
);

const data = await response.json();

res.status(200).json(data);

}

catch(error){

res.status(500).json({
error:"AI Server Error",
details:error.toString()
})

}

}
