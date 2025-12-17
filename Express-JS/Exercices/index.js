import express from "express";
import router from "./modules/router/router.js";

const app = express();

app.use(express.json());
app.use(router)

const PORT = 3000;

const errorMiddleware = (err, req, res, next) => {
  res.status(500).json({ status: "error", message: err.message });
};

app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}`);
});
