import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

// Exercice 3 : Paramètres d’URL et Query Parameters

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id: id });
});

app.get("/users", (req, res) => {
  const { page, limit } = req.query;
  res.json({ page: page, limit: limit });
});

// Exercice 4 : Exercice 4 : Middleware personnalisé

const middleware = (req, res, next) => {
  console.log("[MIDDLEWARE]", req.method, req.url);
  next();
};

app.use(middleware);

app.get("/middleware", (req, res) => {
  res.json({ message: "middleware ok" });
});

// Exercice 5 : Gestion des erreurs avec Express. app.use(errorMiddleware) à la fin du fichier

app.get("/error", (req, res, next) => {
  throw new Error("Oups !");
});

const errorMiddleware = (err, req, res, next) => {
  res.status(500).json({ status: "error", message: err.message });
};

app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}`);
});
