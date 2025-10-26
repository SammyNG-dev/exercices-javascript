function estVoyelle(lettre) {
  lettre = lettre.toLowerCase();
  const voyelles = "aeiouyàâäéèêëîïôöùûüÿ";
  for (const voyelle of voyelles) {
    if (lettre === voyelle.toLowerCase()) {
      return true;
    }
  }
  return false;
}

const compterVoyelles = (chaine) => {
  let total = 0;
  for (const lettre of chaine) {
    if (estVoyelle(lettre)) {
      total += 1;
    }
  }
  return total;
};

console.log(compterVoyelles("BonjOur à tous les amis")); // 9