# NBA Space

NBA Space is a web application that allows users to track NBA stats, standings, and team information. Users can browse NBA teams by conference and division, view team details, and stay on top of player details and conference standings. Deployed on Vercel.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)

---

## Demo

<img width="1898" height="1023" alt="Screenshot 2025-12-10 104126" src="https://github.com/user-attachments/assets/3a3232a5-3b23-4eb9-8b2e-1813086e2c8c" />
<img width="1897" height="1026" alt="Screenshot 2025-12-10 104155" src="https://github.com/user-attachments/assets/98111ee5-1992-4a8a-ab61-801edf71a3d8" />
<img width="1897" height="1026" alt="Screenshot 2025-12-10 104227" src="https://github.com/user-attachments/assets/47dab5b6-e8ea-4426-a3a3-3aaccdd79a56" />

---

## Features

- Browse NBA teams by **conference** and **division**.
- View team details including full name, city, and abbreviation.
- View league standings by conference.
- Search for player information.
- Responsive design using TailwindCSS.
- Dark and light mode toggle.
- Background animations for a cosmic theme.

---

## Technologies Used

### Frontend

- **React.js** – UI library for building dynamic components.
- **TailwindCSS** – Utility-first CSS framework for styling.
- **Vite** – Development server and build tool.
- **Lucide-React** – Icons library.

### Backend

- **Node.js** – JavaScript runtime for the server.
- **Vercel Serverless Functions** – Backend runs as serverless endpoints inside the /api folder.
- **Express.js** – Web framework for creating REST API endpoints.
- **@balldontlie/sdk** – Official SDK to interact with the Balldontlie NBA API. https://nba.balldontlie.io/?javascript#nba-api
- **dotenv** – Manages environment variables for API keys.
  
  A full Express server was originally part of the project but replaced with Vercel serverless functions for easier deployment.
  The old backend folder remains for local testing but is not used in production.



