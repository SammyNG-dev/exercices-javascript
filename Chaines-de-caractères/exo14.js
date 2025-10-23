const phrase = "le javascript est génial".split(" ");

for (let i = 0; i < phrase.length; i++) {
  const mot = phrase.shift();
  const nouveauMot = mot[0].toUpperCase() + mot.slice(1, mot.length);
  phrase.push(nouveauMot);
}
console.log(phrase.join(" "));
