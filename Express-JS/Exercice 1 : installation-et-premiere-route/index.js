import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Bonjour Sammy !");
});

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port ${PORT}`);
});
