import { useState, useEffect } from "react";

export const TeamSection = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedConference, setSelectedConference] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState(null);

  useEffect(() => {
    const loadTeams = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/teams");
        if (!res.ok) throw new Error("Failed to fetch teams from server");
        const data = await res.json();
        setTeams(data.data); // SDK returns { data: [...] }
      } catch (err) {
        console.error(err);
        setError("Failed to load teams.");
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  // Extract unique conferences
  const conferences = [...new Set(teams.map((t) => t.conference).filter(Boolean))];

  // Extract unique divisions based on selected conference
  const divisions = selectedConference
    ? [...new Set(
        teams
          .filter((t) => t.conference === selectedConference)
          .map((t) => t.division)
      )]
    : [];

  // Filter teams by selected conference & division
  const filteredTeams =
    selectedConference && selectedDivision
      ? teams.filter(
          (t) =>
            t.conference === selectedConference &&
            t.division === selectedDivision
        )
      : [];

  return (
    <section
      id="teams"
      className="relative py-24 px-4 container mx-auto text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-8">Browse NBA Teams</h2>

      {/* Loading */}
      {loading && (
        <p className="text-muted-foreground text-lg">Loading teams...</p>
      )}

      {/* Error */}
      {error && <p className="text-red-500 text-lg">{error}</p>}

      {/* Conference Selector */}
{!loading && !error && conferences.length > 0 && (
  <div className="space-x-4 mb-8 flex flex-wrap justify-center">
    {conferences
      .filter((conf) => conf && conf.trim() !== "")
      .map((conf) => (
        <button
          key={conf}
          onClick={() => {
            setSelectedConference(conf);
            setSelectedDivision(null);
          }}
          className={`px-4 py-2 rounded-xl border transition m-2
            ${
              selectedConference === conf
                ? "bg-primary text-primary-foreground"
                : "bg-background text-foreground"
            }`}
        >
          {conf} Conference
        </button>
      ))}
  </div>
)}

      {/* Division Selector */}
      {selectedConference && (
        <div className="space-x-4 mb-10 flex flex-wrap justify-center">
          {divisions.map((div) => (
            <button
              key={div}
              onClick={() => setSelectedDivision(div)}
              className={`px-4 py-2 rounded-xl border transition m-2
                ${
                  selectedDivision === div
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground"
                }`}
            >
              {div}
            </button>
          ))}
        </div>
      )}

      {/* Team Cards */}
      {selectedDivision && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {filteredTeams.map((team) => (
            <div
              key={team.id}
              className="p-6 border rounded-xl bg-card text-foreground shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">{team.full_name}</h3>
              <p className="text-muted-foreground">{team.city}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {team.abbreviation}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
