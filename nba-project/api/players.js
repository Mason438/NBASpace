export default async function handler(req, res) {
  try {
    const search = req.query.search || "";
    const page = req.query.page || 1;
    const per_page = 50;

    const url = `https://api.balldontlie.io/v1/players?search=${search}&active=true&page=${page}&per_page=${per_page}`;

    const response = await fetch(url, {
      headers: { Authorization: process.env.BDL_API_KEY }
    });

    const data = await response.json();

    res.status(200).json({
      data: data.data,
      meta: data.meta
    });
  } catch (err) {
    console.error("Error fetching players:", err);
    res.status(500).json({ error: "Failed to fetch players" });
  }
}
