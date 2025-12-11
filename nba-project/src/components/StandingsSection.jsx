import { useState, useEffect } from "react";

export const StandingsSection = () => {
  
    // Create dictionary of teams and rank with tags either East or West
    const nbaTeamInfo = {
        "Atlanta Hawks": { conference: "East", rank: 9 },
        "Boston Celtics": { conference: "East", rank: 3 },
        "Brooklyn Nets": { conference: "East", rank: null },
        "Charlotte Hornets": { conference: "East", rank: null },
        "Chicago Bulls": { conference: "East", rank: null },
        "Cleveland Cavaliers": { conference: "East", rank: 7 },
        "Detroit Pistons": { conference: "East", rank: 1 },
        "Indiana Pacers": { conference: "East", rank: null },
        "Miami Heat": { conference: "East", rank: 8 },
        "Milwaukee Bucks": { conference: "East", rank: 10 },
        "New York Knicks": { conference: "East", rank: 2 },
        "Orlando Magic": { conference: "East", rank: 4 },
        "Philadelphia 76ers": { conference: "East", rank: 6 },
        "Toronto Raptors": { conference: "East", rank: 5 },
        "Washington Wizards": { conference: "East", rank: null },

        "Dallas Mavericks": { conference: "West", rank: null },
        "Denver Nuggets": { conference: "West", rank: 2 },
        "Golden State Warriors": { conference: "West", rank: 8 },
        "Houston Rockets": { conference: "West", rank: 3 },
        "Los Angeles Clippers": { conference: "West", rank: null },
        "Los Angeles Lakers": { conference: "West", rank: 4 },
        "Memphis Grizzlies": { conference: "West", rank: 9 },
        "Minnesota Timberwolves": { conference: "West", rank: 6 },
        "New Orleans Pelicans": { conference: "West", rank: null },
        "Oklahoma City Thunder": { conference: "West", rank: 1 },
        "Phoenix Suns": { conference: "West", rank: 7 },
        "Portland Trail Blazers": { conference: "West", rank: 10 },
        "Sacramento Kings": { conference: "West", rank: null },
        "San Antonio Spurs": { conference: "West", rank: 5 },
        "Utah Jazz": { conference: "West", rank: null }
    };


  return (
    <section
      id="standings"
      className="relative py-24 px-4 container mx-auto text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-8">Live NBA Standings</h2>
        
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                  <div className="p-6">
                      <h3 className="text-3xl font-semibold mb-1">Eastern Conference</h3>
                      <ul className="space-y-1">
                          {Object.entries(nbaTeamInfo)
                              .filter(([team, data]) => data.conference === "East")
                              .sort(([, a], [, b]) => {
                                  if (a.rank === null) return 1;
                                  if (b.rank === null) return -1;
                                  return a.rank - b.rank;
                              })
                              .map(([team, data]) => (
                                  <li key={team} className="text-lg">
                                      {data.rank !== null ? `${data.rank}. ` : ""}{team}
                                  </li>
                              ))}
                      </ul>
                  </div>
              </div>
              <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                  <div className="p-6">
                      <h3 className="text-3xl font-semibold mb-1">Western Conference</h3>
                      <ul className="space-y-1">
                          {Object.entries(nbaTeamInfo)
                              .filter(([team, data]) => data.conference === "West")
                              .sort(([, a], [, b]) => {
                                  if (a.rank === null) return 1;
                                  if (b.rank === null) return -1;
                                  return a.rank - b.rank;
                              })
                              .map(([team, data]) => (
                                  <li key={team} className="text-lg">
                                      {data.rank !== null ? `${data.rank}. ` : ""}{team}
                                  </li>
                              ))}
                      </ul>
                  </div>
              </div>    
          </div>
    </section>
  );
};
