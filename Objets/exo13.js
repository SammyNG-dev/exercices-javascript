const armoire = { matiere: "bois" };

Object.defineProperty(armoire, "matiere", {
  writable: false,
});

try {
  armoire.matiere = "plastique";
} catch (e) {
  console.log(e);
}
