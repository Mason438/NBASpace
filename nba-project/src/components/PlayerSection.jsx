import { useState } from "react";

export const PlayerSection = () => {
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleSearch = async (pageOverride) => {
    if (!search.trim()) return;

    const newPage = pageOverride || page;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `http://localhost:3000/api/players?search=${search}&page=${newPage}`
      );

      if (!res.ok) throw new Error("Failed response");

      const data = await res.json();

      setPlayers(data.data || []);
      setTotalPages(data.meta.total_pages || 1);
      setPage(newPage);
    } catch (err) {
      setError("Failed to fetch players");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="players" className="relative py-24 px-4 container mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8">Search For Active NBA Players</h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-12">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-xl bg-background text-foreground"
        />

        <button
          onClick={() => handleSearch(1)}
          className="ml-4 px-6 py-2 rounded-xl bg-blue-600 text-white"
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading && <p className="text-muted-foreground text-lg">Loading players...</p>}

      {/* Error */}
      {error && <p className="text-red-500 text-lg">{error}</p>}

      {/* Player Cards */}
      {!loading && players.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {players.map((player) => (
              <div
                key={player.id}
                className="p-6 border rounded-xl bg-card shadow-sm text-left"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {player.first_name} {player.last_name}
                </h3>

                <p className="text-muted-foreground text-sm">
                  Position: {player.position || "N/A"}
                </p>

                <p className="text-muted-foreground text-sm mt-1">
                  Team: {player.team?.full_name}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 space-x-4">
            <button
              disabled={page === 1}
              onClick={() => handleSearch(page - 1)}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
            >
              Prev
            </button>

            <span className="text-lg">
              Page {page} / {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => handleSearch(page + 1)}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* No results */}
      {!loading && players.length === 0 && search.trim() !== "" && !error && (
        <p className="text-muted-foreground text-lg mt-10">No players found.</p>
      )}
    </section>
  );
};
