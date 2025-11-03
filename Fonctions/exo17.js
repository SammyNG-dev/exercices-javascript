const motLePlusFrequent = (chaine) => {
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

  let plusFrequent = splitted[0];

  for (const mot of splitted){
    if(frequence[mot] > frequence[plusFrequent]){
        plusFrequent = mot
    }
  }

  return plusFrequent;
};
console.log(
  motLePlusFrequent("le chat mange le poisson et le chien regarde le chat"),
);
// "le"
z