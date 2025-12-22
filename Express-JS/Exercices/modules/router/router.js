import express from "express";
import { browseUsers, createUser, getUserById } from "../user/userActions.js";
import {
  middleware,
  validateCreateUser,
  validateUserId,
} from "../middlewares/middlewares.js";

const router = express.Router();

router.use(middleware);

// Exercice 3 : Paramètres d’URL et Query Parameters

router.get("/api/user/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id: id });
});

router.get("/api/users ", (req, res) => {
  const { page, limit } = req.query;
  res.json({ page: page, limit: limit });
});

// Exercice 4 : Exercice 4 : Middleware personnalisé

router.get("/api/middleware", (req, res) => {
  res.json({ message: "middleware ok" });
});

// Exercice 5 : Gestion des erreurs avec Express. app.use(errorMiddleware) à la fin du fichier index.js

router.get("/api/error", (req, res, next) => {
  throw new Error("Oups !");
});

// Exercice 6 :

router.get("/api/user/:id", validateUserId, getUserById);
router.post("/api/users", validateCreateUser, createUser);

// Exercice 7 :

router.get("/api/all-users", browseUsers);

export default router;
