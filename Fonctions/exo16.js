const compterDoublonsChaine = (chaine) => {
  const clean = chaine.toLowerCase().replaceAll(" ", "");
  const comptage = {};
  for (const char of clean) {
    if (comptage[char]) {
      comptage[char]++;
    } else {
      comptage[char] = 1;
    }
  }

  const doublons = {};
  for (const element in comptage) {
    if (comptage[element] > 1) {
      doublons[element] = comptage[element];
    }
  }
  return doublons;
};

console.log(compterDoublonsChaine("Bonjour à tous"));
// { o: 3 }

console.log(compterDoublonsChaine("Javascript est super"));
// { a: 2, s: 3, e: 2 }
