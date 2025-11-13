import { addition } from "./exo3.js";

test("Additionne deux nombres", () => {
  expect(addition(5, 8)).toBe(13);
});

import { estPair } from "./exo4.js";

test("Renvoie true pour un nombre pair", () => {
  expect(estPair(8)).toBe(true);
  expect(estPair(-2)).toBe(true);
});

test("Renvoie false pour un nombre impair", () => {
  expect(estPair(15)).toBe(false);
  expect(estPair(-3)).toBe(false);
});

import { sommeTableau } from "./exo6.js";

const nombres = [
  369, 569, 648, 24, 271, 126, 364, 767, 593, 85,
  579, 622, 622, 799, 512, 923, 817, 477, 615, 463,
  187, 439, 708, 653, 120, 358, 637, 769, 47, 984,
  330, 703, 588, 952, 104, 817, 946, 595, 725, 526,
  599, 688, 47, 967, 813, 639, 67, 859, 85, 500
];

test("Renvoie la somme des nombres d'un tableau", () => {
  expect(sommeTableau([15, 3, 8, 9])).toBe(35);
  expect(sommeTableau(nombres)).toBe(26697);
});

import { maxTableau } from "./exo7.js";

test("Renvoie la plus grande valeur du tableau", () => {
  expect(maxTableau([5, 6, 9, 2, 3, 15, 42, 37, 28, 45])).toBe(45);
});

import { contientNombre } from "./exo8.js";

test("Renvoie true si un nombre est présent dans le tableau", () => {
  expect(contientNombre([10, 5, 40, 20, 35], 5)).toBe(true);
});

test("Renvoie false si un nombre n'est pas présent dans un tableau", () => {
  expect(contientNombre([10, 5, 40, 20, 35], 51)).toBe(false);
});
