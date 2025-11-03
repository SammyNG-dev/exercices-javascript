const frequenceMots = (chaine) => {
  const splitted = chaine
    .toLowerCase()
    .replaceAll(",", "")
    .replaceAll(".", "")
    .split(" ");
  const frequence = {};

  for (const mot of splitted) {
    if (frequence[mot]) {
      frequence[mot] += 1;
    } else {
      frequence[mot] = 1;
    }
  }

  return frequence;
};

const texte = "Le chat regarde le chien, et le chien regarde le chat.";

console.log(frequenceMots(texte));
