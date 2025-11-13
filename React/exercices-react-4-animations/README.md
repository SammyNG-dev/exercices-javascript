# ⚛️ Exercice 1 — Animation simple avec React et CSS

### 🎯 Objectif :

Apprendre à animer un élément en React en jouant sur les classes CSS et les states.

---

### 🧠 Consigne :

1. Crée une page/exercice React nommée **`Exercice1`**.
2. Ajoute un **élément `<div>` ou `<p>`** que tu veux animer (par exemple un carré ou un texte).
3. Crée un **state `active`** initialisé à `false`.
4. Ajoute un **bouton** qui va **inverser le state `active`** à chaque clic.
5. En CSS, crée deux styles différents pour ton élément (ex : `position`, `background-color`, `transform`, etc.).
6. Change la **classe de l’élément en fonction du state `active`** pour déclencher l’animation.

---

# 🧩 **Exercice 2 – Apparition et disparition animée**

#### 🎯 Objectif :

Créer une petite animation qui fait **apparaître** puis **disparaître** un carré quand on clique sur un bouton.

#### 🧠 Points à travailler :

* Utiliser un **state** React pour contrôler l’affichage d’un élément.
* Utiliser les propriétés CSS `opacity`, `transform` et `transition` pour rendre ce changement **fluide et naturel**.

#### 🪄 Indications :

1. Crée un carré (div) de **150px × 150px**, avec une couleur visible (ex : bleu).
2. Par défaut, le carré doit être **invisible et réduit** (`opacity: 0` et `transform: scale(0.5)`).
3. Lorsqu’il devient visible, il doit **grandir et apparaître progressivement** (`opacity: 1` et `transform: scale(1)`).
4. Utilise `transition` pour animer le changement sur une durée d’environ **0,5 seconde**.
5. Le bouton doit alterner entre “Afficher” et “Cacher”.

---