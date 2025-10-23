const annee = 1954;

if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
  console.log("Année", annee, ":");
  console.log("L'année est bissextile");
} else {
  console.log("Année", annee, ":");
  console.log("L'année n'est pas bissextile");
}
