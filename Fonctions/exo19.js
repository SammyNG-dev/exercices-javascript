function fusionObjets(obj1, obj2) {
  const objetsFusionnes = {};
  for (const cle in obj1) {
    objetsFusionnes[cle] = obj1[cle];
  }

  for (const cle in obj2) {
    if (!(cle in obj1)) {
      objetsFusionnes[cle] = obj2[cle];
    }
  }

  return objetsFusionnes;
}

const a = { nom: "Sammy", age: 36 };
const b = { age: 40, ville: "Lyon" };

console.log(fusionObjets(a, b));
