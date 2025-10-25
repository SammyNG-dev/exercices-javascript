const villes = ["Paris", "Lyon", "Marseille", "Toulouse"];

// BONUS : pas demandé par l'exercice mais je gère la casse

for (let i = 0; i < villes.length; i++) {
  const ville = villes.shift().toLowerCase();
  villes.push(ville);
}

console.log(
  `Marseille de trouve à la position ${villes.indexOf("Marseille".toLowerCase())}`,
);
