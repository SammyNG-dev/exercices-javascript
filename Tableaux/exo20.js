const stock = [
  { produit: "Clavier", quantite: 5 },
  { produit: "Souris", quantite: 0 },
  { produit: "Écran", quantite: 3 },
  { produit: "Casque", quantite: 0 },
];

for (const article of stock) {
  if (article.quantite > 0) {
    console.log(article.produit, ": en stock");
  } else {
    console.log(article.produit, ": rupture de stock");
  }
}
