const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

// Bonus : ce n'est pas demandé dans l'exercice mais je gère la casse

for (let i = 0; i < jours.length; i++) {
  const jour = jours.shift();
  jours.push(jour.toLowerCase());
}

if (jours.includes("Mercredi".toLowerCase())) {
  console.log("Mercredi est présent");
} else {
  console.log("Mercredi est absent");
}