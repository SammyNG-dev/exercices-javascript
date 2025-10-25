const nombres = [5, 12, 8, 130, 44];

const plusOuEgal10 = nombres.filter((nombre) => nombre >= 10);

console.log(plusOuEgal10.map((chiffre) => chiffre * 2));
