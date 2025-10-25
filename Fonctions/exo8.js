const nombres = [5, 12, 8, 130, 44];

function contientNombre(tableau, chiffreAchercher) {
  for (const nombre of tableau) {
    if (nombre === chiffreAchercher) {
      return true;
    }
  }
  return false;
}

console.log(contientNombre(nombres, 12));
console.log(contientNombre(nombres, 7));
