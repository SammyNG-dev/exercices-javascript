function compterMot(chaine, mot) {
  let count = 0;
  const splitted = chaine.split(" ");
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].toLowerCase() === mot.toLowerCase()) {
      count += 1;
    }
  }
  return count;
}

console.log(compterMot("Le chat regarde le chien et le chat dort", "chat"));
