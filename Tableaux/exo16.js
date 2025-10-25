const produits = [
  { nom: "Clavier", prix: 35 },
  { nom: "Souris", prix: 25 },
  { nom: "Écran", prix: 120 },
  { nom: "Casque audio", prix: 80 },
  { nom: "Tapis de souris", prix: 10 },
];

console.log(produits.filter((produit) => produit.prix >= 50));
