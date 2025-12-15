import express from "express";

const app = express();

const PORT = 3000

app.use(express.json());

app.get("/user", (res) => {
  res.json({ name: "Sammy", age: 36, hobby: "coder" });
});

app.post("/user", (req, res) => {
  const user  = req.body;
  res.json({ message: "utilisateur reçu", user: user });
});

app.listen(PORT, ()=>{
    console.log(`Le serveur écoute sur le port ${PORT}`);
})