# Exercices sur les objets
Il y a un fichier par exercice

Dans le dossier "Variables", lancez : 

```node exoX.js.``` (X est le numéro du fichier.)

## Objets — Exercice 1

Énoncé :
Écris un programme qui :

Crée un objet personne avec les propriétés suivantes :
```
nom: "Dupont"
prenom: "Alice"
age: 30
```

Affiche chaque propriété de l’objet dans la console.

## Objets — Exercice 2

Énoncé :
Écris un programme qui :

Crée un objet voiture avec les propriétés :
```
marque: "Toyota"
modele: "Corolla"
année: 2020
```
Modifie la propriété année pour qu’elle soit 2021.

Affiche l’objet complet dans la console.

## Exercice 3 — Ajout de propriété

Énoncé :
Crée un objet livre avec les propriétés suivantes :
```
titre: "1984"
auteur: "George Orwell"
```
➡️ Puis ajoute dynamiquement une propriété année avec la valeur 1949,
et affiche l’objet complet.

## Exercice 5 — Gérer un objet étudiant

Énoncé :
Crée un objet etudiant avec trois propriétés :
```
nom
moyenne
admis (true si la moyenne ≥ 10, sinon false)
```
➡️ Affiche dans la console :
```
Dupont est admis
```
ou
```
Dupont n’est pas admis
```

## Exercice 6 — Ajouter et supprimer des propriétés

**Énoncé :**
Crée un objet `film` avec les propriétés :

* `titre` : `"Inception"`
* `realisateur` : `"Christopher Nolan"`
* `annee` : `2010`

➡️ Ensuite :

1. Ajoute une propriété `duree` avec la valeur `"2h28"`.
2. Supprime la propriété `annee`.
3. Affiche l’objet final.

## **Exercice 7 — Fusionner deux objets**

**Énoncé :**
Crée deux objets :

```js
const user = { nom: "Alice", age: 25 };
const contact = { email: "alice@mail.com", ville: "Paris" };
```

➡️ Fusionne-les dans un seul objet nommé `profil`.
Affiche ensuite l’objet `profil`.

## **Exercice 8 — Clés dynamiques**

**Énoncé :**
Crée une variable `cle` avec la valeur `"statut"`.
Crée un objet `compte` vide.

## **Exercice 9 — Vérifier l’existence d’une propriété**

**Énoncé :**
Crée un objet `maison` avec les propriétés :

```js
piece: 4
couleur: "bleu"
```

➡️ Vérifie si la propriété `garage` existe dans `maison`.

* Si oui, affiche `"Garage présent"`.
* Sinon, affiche `"Pas de garage"`.

## **Exercice 10 — Compter le nombre de propriétés**

**Énoncé :**
Crée un objet `telephone` avec les propriétés :

```js
marque: "Samsung"
modele: "Galaxy S21"
prix: 799
```

➡️ Affiche le **nombre total de propriétés** de l’objet.

## **Exercice 11 — Parcourir les valeurs d’un objet**

**Énoncé :**
Crée un objet `film` :

```js
titre: "Inception"
realisateur: "Christopher Nolan"
duree: "2h28"
```

➡️ Affiche uniquement **les valeurs** (`"Inception"`, `"Christopher Nolan"`, `"2h28"`) dans la console, **une par ligne**.

## **Exercice 12 — Copier un objet**

**Énoncé :**
Crée un objet `original` :

```js
a: 1
b: 2
c: 3
```

➡️ Crée une **copie indépendante** de cet objet nommée `copie`.
Modifie `copie.a = 10` et affiche **les deux objets** pour vérifier que `original` n’a pas été modifié.

## **Exercice 13 — Propriété non modifiable**

**Énoncé :**
Crée un objet `armoire` avec une propriété :

```js
matiere: "bois"
```

➡️ Rend cette propriété **non modifiable** (readonly).
➡️ Essaie ensuite de changer sa valeur en `"plastique"` et **attrape l’erreur** pour l’afficher dans la console.
