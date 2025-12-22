export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.breakingbadquotes.xyz/v1/quotes",
      { cache: "no-store" },
    );

    if (!response.ok) {
      console.error("Breaking Bad API respondió con error");
      return res.status(500).json({ error: "Error al obtener la cita" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Breaking Bad API caída:", error);
    return res.status(503).json({ error: "API Breaking Bad no disponible" });
  }
}
