let a = 8; // doit prendre la valeur b (13)
let b = 13; // doit prendre la valeur de c (2)
let c = 2; // doit prendra la valeur de a (8)
const d = a;

a = a + b - a;
b = b + c - b;
c = d;

console.log("a :", a);
console.log("b :", b);
console.log("c :", c);
