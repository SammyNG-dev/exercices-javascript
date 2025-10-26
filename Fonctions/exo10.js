const inverserTexte = (string) => {
  const splitted = string.split("");
  const temp = [];
  for (let i = 0; i < string.length; i++) {
    const lettre = splitted.pop();
    temp.push(lettre);
  }
  return temp.join("");
};

console.log(inverserTexte("JavaScript")); // tpircSavaJ
