import { BalldontlieAPI } from "@balldontlie/sdk";

export default async function handler(req, res) {
  const api = new BalldontlieAPI({ apiKey: process.env.BDL_API_KEY });

  try {
    const data = await api.nba.getTeams();
    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching teams:", err);
    res.status(500).json({ error: "Failed to fetch teams" });
  }
}
