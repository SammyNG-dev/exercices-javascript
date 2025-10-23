# Exercices sur les variables

Il y a un fichier par exercice

Dans le dossier "Variables", lancez : 

```node exoX.js.``` (X est le numéro du fichier.)

## Exercice 1 – Bonjour !

Crée une variable prenom contenant ton prénom, puis affiche dans la console :
```
"Bonjour, [ton prénom] !"
```

## Exercice 2 – Calcul simple

Déclare deux variables a et b avec les valeurs de ton choix, puis affiche la somme, la différence, le produit et le quotient de ces deux nombres.

## Exercice 3 – Changement de valeur

Crée une variable temperature initialisée à 20.
Affiche sa valeur, puis change-la pour 25 et affiche à nouveau sa valeur.
Observe ce qui se passe.

## Exercice 4 – Types et concaténation

Crée trois variables :

nom → ton nom de famille
age → ton âge
ville → ta ville actuelle

Affiche ensuite une phrase du type :

"Je m'appelle [nom], j'ai [âge] ans et j'habite à [ville]."

## Exercice 5 – Constantes et let

Crée une constante PI valant 3.14.
Tente de modifier sa valeur et observe ce qui se passe.
Explique la différence entre let et const (en commentaire dans ton code).

## Exercice 6 – Types de données

Crée une variable pour chaque type suivant :

nombre
chaîne de caractères
booléen
tableau
objet

Affiche le type de chacune à l’aide de typeof.

## Exercice 7 – Échange de valeurs

Déclare deux variables :

let x = 5;
let y = 10;


Échange leurs valeurs sans utiliser de troisième variable temporaire.

## Exercice 8 — Conversion de types

Crée une variable contenant le nombre 42 sous forme de chaîne de caractères ("42").
Transforme-la ensuite en nombre, additionne 8, et affiche le résultat dans la console.

## Exercice 9 — Température

Déclare une variable celsius avec une valeur de ton choix.
Crée une autre variable fahrenheit qui contient la conversion selon la formule :

°𝐹=°𝐶×9/5+32

Affiche le résultat avec un texte clair, par exemple :
25°C = 77°F

## Exercice 10 — Interpolation de chaînes

Crée deux variables : prenom et age.
Affiche dans la console :
Bonjour, je m'appelle [prenom] et j'ai [age] ans.
➡️ Fais-le avec les backticks (`) et sans utiliser l’opérateur +.

## Exercice 11 — Incrémentation

Crée une variable compteur valant 0.
Fais-la augmenter de 1, puis encore de 1, en utilisant l’opérateur d’incrémentation (++).
Affiche la valeur finale.

## Exercice 12 — Échange de trois variables

Tu connais déjà l’échange entre deux variables.
Maintenant, essaie d’échanger les valeurs de trois variables (a, b, c) de sorte que :

la valeur de a devienne celle de b
b devienne celle de c
c devienne celle de a

Sans utiliser de tableau ni de structure complexe

➡️ Contraintes :

Ne pas utiliser de tableau ([a, b, c] = ...)
Ne pas utiliser de structures avancées (objets, fonctions, etc.)
Tu peux utiliser une seule variable temporaire si nécessaire.

## Exercice 13 — Concaténation et espaces

Crée trois variables :

let mot1;
let mot2;
let mot3;


Stocke dans chacune un mot de ton choix.

Affiche ensuite une phrase complète formée des trois mots séparés par des espaces dans la console.

Exemple attendu (avec tes propres mots) :

Bonjour le monde


➡️ Contraintes :

Tu peux utiliser l’opérateur + pour concaténer, ou les backticks ` pour l’interpolation.

Assure-toi qu’il y ait un espace entre chaque mot.

## Exercice 14 — Conversion et manipulation numérique (version variables)

Crée une variable nombre contenant un nombre sous forme de chaîne de caractères, par exemple "42".

Convertis cette chaîne en nombre.

Crée une autre variable resultat et effectue sur le nombre converti une opération (au choix) :

additionner 10
multiplier par 2
soustraire 5

Affiche le résultat final avec console.log().

➡️ Contraintes :

Utilise la conversion de type (Number() ou parseInt()).

Tout doit rester dans des variables, pas de conditions ni de fonctions.
