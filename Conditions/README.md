## Exercices sur les conditions
Il y a un fichier par exercice

Dans le dossier "Variables", lancez : 

```node exoX.js.``` (X est le numéro du fichier.)

# Exercice 1 — Nombre positif ou négatif

Crée une variable nombre et donne-lui une valeur (positive, négative ou zéro).

Utilise une condition if...else pour afficher dans la console :

"Le nombre est positif" si la valeur est supérieure à 0
"Le nombre est négatif" si la valeur est inférieure à 0
"Le nombre est zéro" si la valeur vaut 0

➡️ Objectif : t’entraîner à tester différentes conditions et à utiliser if, else if et else.

# Exercice 2 — Pair ou impair

Crée une variable nombre et donne-lui une valeur entière.

Utilise une condition if...else pour afficher dans la console :

"Le nombre est pair" si la valeur est divisible par 2
"Le nombre est impair" sinon

➡️ Objectif : s’entraîner à utiliser l’opérateur modulo % et les conditions simples.

# Exercice 3 — Vérification d’âge

Crée une variable age avec un nombre entier représentant l’âge d’une personne.

Utilise une condition if...else if...else pour afficher dans la console :

"Mineur" si age est inférieur à 18
"Majeur" si age est compris entre 18 et 60 inclus
"Senior" si age est supérieur à 60

➡️ Objectif : s’entraîner à enchaîner plusieurs conditions et à utiliser else if.

# Exercice 4 — Conditions

Énoncé :
Demande à l’utilisateur d’entrer une année, puis affiche si cette année est bissextile ou non.

👉 Rappel :
Une année est bissextile si :

elle est divisible par 4 et pas par 100,
ou si elle est divisible par 400.

# Exercice 5 – Comparaison de trois nombres

Énoncé :

Écris un programme qui prend trois nombres et affiche le plus grand des trois.

# Exercice 6 – Pair ou impair (version améliorée)

👉 Écris un programme qui affiche si un nombre est pair ou impair,
mais cette fois-ci, il doit aussi indiquer si le nombre est positif, négatif ou nul.

Exemples attendus :

4 → “Le nombre est pair et positif”
-7 → “Le nombre est impair et négatif”
0 → “Le nombre est pair et nul”

Tu n’as pas le droit d’utiliser de fonctions toutes faites comme Math.sign().
Fais-le uniquement avec des conditions if, else if, else.

# Exercice 7 – Vérification de notes

Énoncé :
Écris un programme qui :

Prend une variable note (nombre entre 0 et 20).

Affiche une appréciation selon la note :

Note	Appréciation
0–9	    "Échec"
10–12	"Passable"
13–16	"Bien"
17–20	"Très bien"

➡️ Objectif : t’entraîner à enchaîner plusieurs conditions avec if ... else if ... else.

# Exercice 8 — Vérifier si trois longueurs peuvent former un triangle

Énoncé :
Écris un programme qui prend trois longueurs a, b et c, puis affiche :

"Triangle possible" si ces longueurs peuvent former un triangle,

"Triangle impossible" sinon.

💡 Rappel : trois côtés peuvent former un triangle si et seulement si
chacun d’eux est strictement inférieur à la somme des deux autres.

# Exercice 9 — Jour de la semaine

Énoncé :
Écris un programme qui prend une variable jour contenant un nombre entre 1 et 7.
Selon la valeur, ton programme doit afficher :

"Lundi" si jour = 1
"Mardi" si jour = 2
...
"Dimanche" si jour = 7

Et si la valeur ne correspond à aucun jour, affiche
"Valeur invalide".

💡 Tu peux utiliser soit une série de if...else if, soit un switch si tu veux t’entraîner à le découvrir.

