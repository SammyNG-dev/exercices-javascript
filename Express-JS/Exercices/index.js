import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

// Exercice 3 : Paramètres d’URL et Query Parameters

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.json({id: id})
});

app.get("/users", (req, res) => {
  const { page, limit } = req.query;
  res.json({ page: page, limit: limit });
});

app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}`);
});
