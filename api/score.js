export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.cricapi.com/v1/currentMatches?apikey=0d1e4d24-19c5-45b4-836a-d9687476177a"
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "API error" });
  }
}
