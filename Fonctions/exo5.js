const saluerAvecAge = (nom, age) => {
  if (!age) {
    age = 18;
  }

  console.log(`Bonjour ${nom}, tu as ${age} ans`);
};

saluerAvecAge("Sammy", 36);
saluerAvecAge("Alex")