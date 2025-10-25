# Exercices sur les objets

Il y a un fichier par exercice

Dans le dossier "Variables", lancez : 

```node exoX.js.``` (X est le numéro du fichier.)

## **Exercice 1 — Créer et afficher un tableau**

**Énoncé :**
Crée un tableau `fruits` contenant les éléments :

```js
"Pomme", "Banane", "Cerise"
```

➡️ Affiche ensuite **chaque élément** du tableau dans la console, **une ligne par élément**.

## **Exercice 2 — Accéder aux éléments d’un tableau**

**Énoncé :**
Crée un tableau `nombres` contenant les éléments :

```js
5, 10, 15, 20
```

➡️ Affiche dans la console :

* Le premier élément
* Le deuxième élément
* Le dernier élément

## **Exercice 3 — Modifier des éléments d’un tableau**

**Énoncé :**
Crée un tableau `couleurs` contenant :

```js
"Rouge", "Vert", "Bleu"
```

➡️ Change le deuxième élément en `"Jaune"`.
➡️ Affiche ensuite le tableau entier pour vérifier la modification.

## **Exercice 4 — Ajouter et supprimer des éléments**

**Énoncé :**
Crée un tableau `animaux` contenant :

```js
"Chat", "Chien", "Lapin"
```

➡️ Ajoute `"Oiseau"` à la fin du tableau.
➡️ Supprime `"Chat"` du début du tableau.
➡️ Affiche le tableau final.

## **Exercice 5 — Rechercher un élément dans un tableau**

**Énoncé :**
Crée un tableau `jours` contenant :

```js
"Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"
```

➡️ Vérifie si `"Mercredi"` est présent dans le tableau.
➡️ Affiche `"Mercredi est présent"` si oui, sinon `"Mercredi est absent"`.

## **Exercice 6 — Trouver le plus grand nombre d’un tableau**

**Énoncé :**
Crée un tableau `scores` contenant :

```js
12, 45, 7, 32, 89, 23
```

➡️ Trouve le plus grand nombre du tableau.
➡️ Affiche :

```
Le plus grand score est : 89
```

## 🧩 Exercice 7 — Inverser un tableau

**Énoncé :**
Crée un tableau `prenoms` contenant :

```js
["Alice", "Bob", "Charlie", "David"]
```

➡️ Inverse l’ordre des éléments du tableau.
➡️ Affiche :

```
["David", "Charlie", "Bob", "Alice"]
```

## 🧩 Exercice 8 — Fusionner deux tableaux

**Énoncé :**
Crée deux tableaux :

```js
const fruits = ["Pomme", "Banane"];
const legumes = ["Carotte", "Tomate"];
```

➡️ Fusionne-les dans un seul tableau appelé `courses`.
➡️ Affiche le tableau fusionné :

```
["Pomme", "Banane", "Carotte", "Tomate"]
```

## 🧩 Exercice 9 — Trouver un élément dans un tableau

**Énoncé :**
Crée un tableau :

```js
const nombres = [3, 8, 12, 5, 7];
```

➡️ Vérifie si le nombre `12` est présent dans le tableau.
➡️ Si oui, affiche `"Trouvé !"`, sinon `"Absent"`.

## 🧩 Exercice 10 — Filtrer un tableau

**Énoncé :**
Crée un tableau :

```js
const notes = [4, 12, 8, 15, 19, 5];
```

➡️ Utilise la méthode `filter()` pour créer un **nouveau tableau** ne contenant que les notes **supérieures ou égales à 10**.
➡️ Affiche ensuite ce nouveau tableau.
## 🧩 Exercice 11 — Transformation d’un tableau

**Énoncé :**
Crée un tableau :

```js
const prixHT = [10, 20, 30];
```

➡️ Utilise la méthode `map()` pour créer un **nouveau tableau** contenant les prix **TTC** (avec une TVA de 20 %).
➡️ Affiche le tableau des prix TTC.
## 🧩 Exercice 12 — Somme des éléments d’un tableau

**Énoncé :**
Crée un tableau de nombres :

```js
const nombres = [5, 10, 15, 20];
```

➡️ Utilise la méthode `reduce()` pour calculer la **somme totale** des nombres.
➡️ Affiche le résultat.

### 🧩 Exercice 13 — Trouver la position d’un élément

**Énoncé :**
Crée un tableau de chaînes de caractères :

```js
const villes = ["Paris", "Lyon", "Marseille", "Toulouse"];
```

➡️ Utilise la méthode `indexOf()` pour afficher **la position** de `"Marseille"` dans le tableau.
➡️ Affiche ensuite un message comme :

```
"Marseille se trouve à la position X"
```

## 🧩 Exercice 14 — Trier un tableau

**Énoncé :**
Crée un tableau de nombres :

```js
const nombres = [42, 5, 12, 100, 8];
```

➡️ Trie le tableau par ordre croissant.
➡️ Affiche le tableau trié.

## 🧩 Exercice 16 — Filtrer un tableau d’objets

**Énoncé :**
Crée un tableau `produits` contenant plusieurs objets avec les propriétés suivantes :

* `nom`
* `prix`

➡️ Affiche uniquement les **produits dont le prix est supérieur ou égal à 50 €**
(utilise une méthode adaptée pour créer un nouveau tableau).

🟩 **Exercice 17 — Somme des commandes payées**

**Énoncé :**
Tu disposes du tableau suivant :

```js
const commandes = [
  { client: "Alice", montant: 120, payee: true },
  { client: "Bob", montant: 80, payee: false },
  { client: "Charlie", montant: 50, payee: true },
  { client: "David", montant: 200, payee: false },
];
```

➡️ Affiche **la somme totale des commandes payées uniquement**.
Tu peux utiliser une **boucle** ou les **méthodes de tableau** (`filter`, `reduce`, etc.).

## 🧩 Exercice 18 — Combiner boucles, conditions et tableaux d’objets

**Énoncé :**
Crée un tableau `etudiants` contenant plusieurs objets avec les propriétés suivantes :

* `nom` (chaîne de caractères)
* `moyenne` (nombre)
* `admis` (booléen)

➡️ 1. Parcours le tableau avec une boucle `for...of`.
➡️ 2. Si la moyenne d’un étudiant est **supérieure ou égale à 10**, change sa propriété `admis` à `true`.
➡️ 3. Affiche pour chaque étudiant une phrase du type :

```
Alice : admis
Bob : non admis
```

🟩 **Exercice 19 — Filtrer et transformer un tableau**

**Énoncé :**
Tu disposes du tableau suivant :

```js
const nombres = [5, 12, 8, 130, 44];
```

➡️ 1. Crée un **nouveau tableau** contenant uniquement les nombres supérieurs ou égaux à 10.
➡️ 2. Multiplie ensuite **chaque nombre filtré par 2**.
➡️ 3. Affiche le résultat final.

Tu peux utiliser les méthodes **`filter`** et **`map`**.

🟩 **Exercice 20 — Mini-gestion de stock**

**Énoncé :**
Tu disposes du tableau suivant :

```js
const stock = [
  { produit: "Clavier", quantite: 5 },
  { produit: "Souris", quantite: 0 },
  { produit: "Écran", quantite: 3 },
  { produit: "Casque", quantite: 0 },
];
```

➡️ 1. Parcours le tableau avec une boucle `for...of`.
➡️ 2. Si la quantité d’un produit est **supérieure à 0**, affiche :

```
Clavier : en stock
```

➡️ 3. Sinon, affiche :

```
Souris : rupture de stock
```

Le but est de combiner **boucles** et **conditions** sur un tableau d’objets.

🟩 **Exercice 21 — Tri et filtrage avancé**

**Énoncé :**
Tu disposes du tableau suivant :

```js
const etudiants = [
  { nom: "Alice", moyenne: 12 },
  { nom: "Bob", moyenne: 8 },
  { nom: "Charlie", moyenne: 15 },
  { nom: "David", moyenne: 9 },
];
```

➡️ 1. Filtre les étudiants dont la **moyenne est supérieure ou égale à 10**.
➡️ 2. Trie-les ensuite par **ordre décroissant de moyenne**.
➡️ 3. Affiche le résultat final.

Tu peux utiliser les méthodes **`filter`** et **`sort`**.

