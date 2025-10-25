const etudiants = [
  { nom: "Alice", moyenne: 12 },
  { nom: "Bob", moyenne: 8 },
  { nom: "Charlie", moyenne: 15 },
  { nom: "David", moyenne: 9 },
];

const moreThanOrEqual10 = etudiants.filter(
  (etudiant) => etudiant.moyenne >= 10,
);

console.log(moreThanOrEqual10.sort((etudiant) => etudiant.moyenne).reverse());
