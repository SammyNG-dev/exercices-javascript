const motLePlusLong = (chaine) => {
  const splitted = chaine.split(" ");
  let lePlusLong = splitted[0];

  for (let i = 0; i < splitted.length; i++) {
    if (lePlusLong.length < splitted[i].length) {
      lePlusLong = splitted[i];
    }
  }
  return lePlusLong;
};

console.log(motLePlusLong("Les développeurs adorent JavaScript"));
// "développeurs"
