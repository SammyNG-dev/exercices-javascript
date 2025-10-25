const utilisateurs = [
  { nom: "Jean", age: 30},
  { nom: "Alice", age: 29 },
  { nom: "Louis", age: 45 },
];

const age30 = utilisateurs.find((user) => user.age === 30);

if (age30) {
  console.log(age30.nom);
} else {
  console.log("Aucun utilisateur de 30 ans trouvé");
}

