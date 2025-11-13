export function estPair(nombre) {
  return nombre % 2 === 0;
}

const nombres = [5, 12, 16, 17, 20, 23];

for (const chiffre of nombres) {
  if (estPair(chiffre)) {
    console.log(chiffre, "est pair");
  } else {
    console.log(chiffre, "est impair");
  }
}
