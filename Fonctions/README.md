# Exercices sur les objets

Il y a un fichier par exercice

Dans le dossier "Variables", lancez : 

```node exoX.js.``` (X est le numéro du fichier.)

## Exercice 1 — Déclarer et appeler une fonction simple

**Énoncé :**
Crée une fonction `bonjour` qui **n’a pas de paramètre** et qui affiche dans la console :

```
Bonjour !
```

➡️ Ensuite, appelle cette fonction pour qu’elle s’exécute.

## Exercice 2 — Fonction avec paramètre

**Énoncé :**
Crée une fonction `saluer` qui prend **un paramètre `nom`** et qui affiche dans la console :

```
Bonjour, <nom> !
```

➡️ Ensuite, appelle la fonction avec différents noms pour tester.

## Exercice 3 — Fonction qui renvoie une valeur

**Énoncé :**
Crée une fonction `addition` qui prend **deux nombres** en paramètres et **renvoie leur somme**.
➡️ Ensuite, affiche le résultat de l’addition dans la console.

## Exercice 4 — Fonction avec condition

**Énoncé :**
Crée une fonction `estPair` qui prend **un nombre** en paramètre et **renvoie `true` si le nombre est pair**, sinon `false`.
➡️ Teste-la avec plusieurs nombres et affiche les résultats dans la console.

## Exercice 5 — Fonction avec valeur par défaut

**Énoncé :**
Crée une fonction `saluerAvecAge` qui prend **deux paramètres** : `nom` et `age`.

* Si `age` n’est pas fourni, il doit **valoir 18 par défaut**.
* La fonction doit afficher :

```
Bonjour <nom>, tu as <age> ans !
```

➡️ Teste-la avec et sans préciser l’âge.

## Exercice 6 — Calculer la somme d’un tableau

**Énoncé :**
Crée une fonction `sommeTableau` qui prend un **tableau de nombres** en paramètre et retourne la **somme de tous les éléments**.

➡️ Exemple :

```js
const nombres = [5, 10, 15];
console.log(sommeTableau(nombres)); // 30
```

## Exercice 7 — Trouver le plus grand nombre d’un tableau

**Énoncé** :
Crée une fonction `maxTableau` qui prend en paramètre un **tableau de nombres** et retourne le **plus grand nombre** du tableau.

➡️ Exemple :

```js
const nombres = [5, 12, 8, 130, 44];
console.log(maxTableau(nombres)); // 130
```

## Exercice 8 — Vérifier si un nombre est présent dans un tableau

**Énoncé** :
Crée une fonction `contientNombre` qui prend en paramètre un **tableau de nombres** et un **nombre**.
La fonction doit retourner `true` si le nombre est présent dans le tableau, sinon `false`.

➡️ Exemple :

```js
const nombres = [5, 12, 8, 130, 44];
console.log(contientNombre(nombres, 12)); // true
console.log(contientNombre(nombres, 7));  // false
```
