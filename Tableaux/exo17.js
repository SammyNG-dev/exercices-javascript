const commandes = [
  { client: "Alice", montant: 120, payee: true },
  { client: "Bob", montant: 80, payee: false },
  { client: "Charlie", montant: 50, payee: true },
  { client: "David", montant: 200, payee: false },
];

const payees = commandes.filter((commande) => commande.payee === true);

let somme = 0;

for (const article of payees) {
  somme += article.montant;
}

console.log(somme);
