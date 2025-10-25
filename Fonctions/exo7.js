const nombres = [5, 12, 8, 130, 44, 150];

function maxTableau(tableau) {
  let nbMax = tableau[0];
  for (let i = 0; i < tableau.length; i++) {
    if (nbMax < tableau[i]) {
      nbMax = tableau[i];
    }
  }
  return nbMax;
}

console.log(maxTableau(nombres));
