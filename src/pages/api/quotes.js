export default async function handler(req, res) {
    try {
      const response = await fetch("https://api.quotable.io/random");
  
      if (!response.ok) {
        return res.status(500).json({ error: "Error al obtener la cita" });
      }
  
      const data = await response.json();
      res.status(200).json(data);
  
    } catch (error) {
      res.status(503).json({ error: "API externa no disponible" });
    }
  }
  