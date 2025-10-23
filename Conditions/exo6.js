const nombre = 1;
if (nombre === 0) {
  console.log("Le nombre est nul");
} else if (nombre % 2 === 0) {
  let phrase = "Le nombre est pair et ";
  if (nombre > 0) {
    phrase += "positif";
    console.log(phrase);
  } else {
    phrase += "négatif";
    console.log(phrase);
  }
} else if (nombre % 2 !== 0) {
  let phrase = "Le nombre est impair et ";
  if (nombre > 0) {
    phrase += "positif";
    console.log(phrase);
  } else {
    phrase += "négatif";
    console.log(phrase);
  }
}
