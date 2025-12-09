import express from "express";
import dotenv from "dotenv";
import { BalldontlieAPI } from "@balldontlie/sdk";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Allow requests from React frontend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Initialize SDK with API key
const api = new BalldontlieAPI({ apiKey: process.env.BDL_API_KEY });

// Endpoint to get all NBA teams
app.get("/api/teams", async (req, res) => {
  try {
    const data = await api.nba.getTeams(); // SDK method
    res.json(data);
  } catch (err) {
    console.error("Error fetching teams:", err);
    res.status(500).json({ error: "Failed to fetch teams" });
  }
});

app.get("/api/players", async (req, res) => {
 try {
   const search = req.query.search || "";
   const page = req.query.page || 1;
   const per_page = 50;


   // Balldontlie v1 supports ?active=true
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


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});