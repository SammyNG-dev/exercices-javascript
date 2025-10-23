const phrase =
  "Le renard brun rapide saute par-dessus le chien paresseux".toLowerCase();

const voyelles = "aeiouy";

let count = 0;

for (let i = 0; i < phrase.length; i++) {
  for (let j = 0; j < voyelles.length; j++) {
    if (phrase[i] === voyelles[j]) {
      count++;
    }
  }
}

console.log(`La phrase compte ${count} voyelles.`);
