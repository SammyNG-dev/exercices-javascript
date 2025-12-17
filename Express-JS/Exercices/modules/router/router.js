import express from "express";
import { createUser, getUser } from "../user/userActions.js";
import { middleware } from "../middlewares/middlewares.js";

const router = express.Router();

router.use(middleware);

// Exercice 3 : Paramètres d’URL et Query Parameters

router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id: id });
});

router.get("/users", (req, res) => {
  const { page, limit } = req.query;
  res.json({ page: page, limit: limit });
});

// Exercice 4 : Exercice 4 : Middleware personnalisé

router.get("/middleware", (req, res) => {
  res.json({ message: "middleware ok" });
});

// Exercice 5 : Gestion des erreurs avec Express. app.use(errorMiddleware) à la fin du fichier index.js

router.get("/error", (req, res, next) => {
  throw new Error("Oups !");
});

// Exercice 6 : 

router.get("/infos-user", getUser);
router.post("/create-user", createUser);

export default router;
