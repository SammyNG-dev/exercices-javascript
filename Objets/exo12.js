const original = { a: 1, b: 2, c: 3 };
const copie = {};

Object.assign(copie, original);

copie.a = 10

console.log("original :", original);
console.log("copie :", copie);
