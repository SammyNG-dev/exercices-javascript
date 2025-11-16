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

# ⚛️ Exercice 3 — Apparition en chaîne

### 🎯 Objectif :

Apprendre à utiliser **`transition-delay`** pour faire apparaître plusieurs éléments successivement.

---

### 🧠 Consigne :

1. Crée un composant React nommé **`Exercice3`**.
2. Génère **5 divs carrées** à l’écran, toutes de la même taille et couleur.
3. Chaque div doit avoir **initialement `opacity: 0` et `transform: translateY(20px)`**.
4. Ajoute un **bouton** pour activer l’apparition des divs.
5. Lors du clic, chaque div doit **apparaître l’une après l’autre** avec un petit décalage.
   → Utilise **`transition`** + **`transition-delay`** ou des classes CSS différentes pour gérer le timing.
6. Une fois visibles, les divs doivent être **entièrement opaques et positionnées normalement** (`opacity: 1`, `transform: translateY(0)`).

---

### 💡 Indices CSS :

* `transition: all 0.5s ease;`
* `transition-delay: 0s, 0.2s, 0.4s ...` pour chaque div.
* Tu peux utiliser `nth-child` en CSS pour appliquer un délai différent à chaque div.

---

## ⚛️ Exercice 4 — Hover et transform avancé

### 🎯 Objectif :

Apprendre à combiner plusieurs transformations CSS (`rotate`, `translateY`, `scale`) avec des transitions pour rendre un élément interactif quand on le survole.

---

### 🧠 Consigne :

1. Crée un composant React `Exercice4`.
2. Ajoute une **div** de taille carrée, par exemple 100x100px, avec une couleur de fond.
3. Applique un **hover** CSS sur cette div qui fait :

   * `rotate(15deg)`
   * `translateY(-20px)`
   * `scale(1.2)`
4. Ajoute une **transition** pour que la transformation se fasse de manière fluide.
5. Ajoute un bouton **RESET** dans le JSX pour retirer la classe de hover si tu veux tester l’animation via React (optionnel, sinon le hover suffit).

---

### 💡 Indices :

* Tu vas utiliser **`:hover`** pour déclencher les transformations.
* La propriété `transition` doit inclure **toutes les transformations** que tu veux animer :

```css
transition: transform 0.5s ease;
```

* Tu peux tester différentes durées et fonctions d’animation (`ease-in`, `ease-out`, `linear`, etc.).

---
