import fetch from "node-fetch";

export default async function handler(req, res) {
  const { name, type } = req.query;

  if (!name || !type) {
    return res.status(400).json({ error: "Missing name or type query params" });
  }

  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        name
      )}&entity=${encodeURIComponent(type)}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("iTunes fetch error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
}
