const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Endpoint to get all NBA teams - using direct fetch instead of SDK
app.get("/api/teams", async (req, res) => {
  try {
    const response = await fetch("https://api.balldontlie.io/v1/teams", {
      headers: {
        Authorization: process.env.BDL_API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();
    res.json(data); // Returns { data: [...], meta: {...} }
  } catch (err) {
    console.error("Error fetching teams:", err);
    res.status(500).json({ error: "Failed to fetch teams", details: err.message });
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

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();

    res.json({
      data: data.data,
      meta: data.meta
    });
  } catch (err) {
    console.error("Error fetching players:", err);
    res.status(500).json({ error: "Failed to fetch players", details: err.message });
  }
});

module.exports = app;