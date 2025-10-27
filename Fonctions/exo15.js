const estInclus = (iterable, element) => {
  for (let i = 0; i < iterable.length; i++) {
    if (
      iterable[i].toString().toLowerCase() === element.toString().toLowerCase()
    ) {
      return true;
    }
  }
  return false;
};

function trouverDoublons(sequence) {
  const doublons = [];
  for (let i = 0; i < sequence.length; i++) {
    for (let j = i + 1; j < sequence.length; j++) {
      if (sequence[i] === sequence[j]) {
        if (!estInclus(doublons, sequence[i])) {
          doublons.push(sequence[i]);
        }
      }
    }
  }
  return doublons;
}

console.log(trouverDoublons([1, 2, 3, 4, 2, 3, 5])); // [2, 3]
console.log(trouverDoublons(["pomme", "banane", "orange", "pomme", "pomme"])); // ["pomme"]
console.log(trouverDoublons([true, false, true, true, false])); // [true, false]
console.log(trouverDoublons([1, 2, 3, 4, 5])); // []
