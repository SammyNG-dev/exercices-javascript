const ordinateur = { marque: "Dell", processeur: "Intel 17", ram: "16Go" };

for (const cle in ordinateur) {
  console.log(cle, ":", ordinateur[cle]);
}
