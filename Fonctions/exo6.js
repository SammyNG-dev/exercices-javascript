const nombres = [5, 10, 15];

function sommeTableau(tableau) {
  let total = 0;
  for (let i = 0; i < tableau.length; i++) {
    total += tableau[i];
  }
  return total;
}

function sommeTableau2(array) {
  return array.reduce((acc, curValue) => acc + curValue, 0);
}

console.log(sommeTableau(nombres));
console.log(sommeTableau2(nombres));


