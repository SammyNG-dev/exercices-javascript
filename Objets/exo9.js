const maison = { pieces: 4, couleur: "bleu" };

const cles = Object.keys(maison);

if (cles.includes("garage")) {
  console.log("Garage présent");
} else {
  console.log("Pas de garage");
}
