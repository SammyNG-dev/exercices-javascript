const etudiant = { nom: "Dupont", moyenne: 12, estAdmis: false };

if (etudiant.moyenne >= 10) {
  etudiant.estAdmis = true;
  console.log(etudiant.nom, "est admis");
} else {
  console.log(etudiant.nom, "n'est pas admis");
}
