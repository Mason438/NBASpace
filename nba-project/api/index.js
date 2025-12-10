import express from "express";
import { BalldontlieAPI } from "@balldontlie/sdk";

const app = express();

// CORS headers 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Initialize SDK with API key (from Vercel environment variables)
const api = new BalldontlieAPI({ apiKey: process.env.BDL_API_KEY });

// Endpoint to get all NBA teams
app.get("/api/teams", async (req, res) => {
  try {
    const data = await api.nba.getTeams();
    res.json(data);
  } catch (err) {
    console.error("Error fetching teams:", err);
    res.status(500).json({ error: "Failed to fetch teams" });
  }
});

// Endpoint to get players with search
app.get("/api/players", async (req, res) => {
  try {
    const search = req.query.search || "";
    const page = req.query.page || 1;
    const per_page = 50;

    const url = `https://api.balldontlie.io/v1/players?search=${search}&active=true&page=${page}&per_page=${per_page}`;

    const response = await fetch(url, {
      headers: {
        Authorization: process.env.BDL_API_KEY
      }
    });

    const data = await response.json();

    res.json({
      data: data.data,
      meta: data.meta
    });
  } catch (err) {
    console.error("Error fetching players:", err);
    res.status(500).json({ error: "Failed to fetch players" });
  }
});


export default app;