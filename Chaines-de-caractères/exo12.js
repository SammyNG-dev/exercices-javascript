const phrase = "Les chaussettes de l'archiduchesse sont sèches".toLowerCase();

const lettreAChercher = "s".toLowerCase();

let count = 0;

for (let i = 0; i < phrase.length; i++) {
  if (phrase[i] === lettreAChercher) {
    count++;
  }
}

console.log(`La lettre "${lettreAChercher}" se trouve ${count} fois dans la phrase.`)