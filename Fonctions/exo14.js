function deleteSpace(chaine) {
  return chaine.replaceAll(" ", "");
}


const inverserTexte = (string) => {
  const splitted = string.split("");
  const temp = [];
  for (let i = 0; i < string.length; i++) {
    const lettre = splitted.pop();
    temp.push(lettre);
  }
  return temp.join("");
};

const estPalindrome = (original) => {
  const originalSpaceless = deleteSpace(original);
  const reversedText = inverserTexte(deleteSpace(original));
  return originalSpaceless.toLowerCase() === reversedText.toLowerCase();
};

const astronaute = "Je suis un astronaute qui ne vole jamais";

console.log(1, estPalindrome(astronaute));
console.log(2, estPalindrome("Esope reste ici et se repose")); 
console.log(3, estPalindrome("Kayak")); 
console.log(4, estPalindrome("radar")); 
console.log(5, estPalindrome("Laval")); 
console.log(6, estPalindrome("ressasser")); 
console.log(7, estPalindrome("Engage le jeu que je le gagne"));
console.log(8, estPalindrome("Bonjour")); 
console.log(9, estPalindrome("OpenAI")); 
console.log(10, estPalindrome("JavaScript est top")); 
console.log(11, estPalindrome("Perceval est un chevalier"));