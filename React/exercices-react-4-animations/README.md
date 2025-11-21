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

## ⚛️ Exercice 5 — Animations en chaîne

### 🎯 Objectif :

Apprendre à enchaîner des animations sur plusieurs éléments grâce à `transition-delay`.

---

### 🧠 Consigne :

1. Crée un composant avec **5 carrés** (ou plus) empilés verticalement ou horizontalement.
2. Chaque carré doit avoir une **classe CSS** qui définit sa taille, couleur et état initial :

   * **opacity** : 0
   * **transform** : translation ou scale réduite
   * **transition** : durée et fonction d’accélération
3. Quand tu cliques sur un bouton :

   * Ajoute une **classe `visible`** qui met **opacity à 1** et remet le **scale/translation à sa position finale**.
4. Utilise **`nth-child()`** pour définir un **`transition-delay` différent pour chaque carré**, afin qu’ils apparaissent **les uns après les autres**.

---

### 🔥 Exercice 6 — Animation *hover* avancée + *transition chaining*

**Objectif :**
Créer une carte (un rectangle) qui réagit au *hover* avec **plusieurs transformations simultanées** :

* légère rotation
* zoom
* ombre dynamique
* effet de profondeur avec `transform-origin`
* et une transition très fluide

Tu vas apprendre :

* `transform-origin`
* comment enchaîner plusieurs transitions sans casser l’animation
* comment faire une animation « 3D light » ultra simple

---

## 🎯 Consigne

Tu vas créer un composant avec **une seule div** :

### 👉 Au repos (pas de hover) :

* la carte est plate (`transform: rotate(0) scale(1)`)
* a une petite ombre
* transition douce

### 👉 Au survol (`:hover`) :

* elle fait une légère rotation 3D
* elle grossit légèrement
* son ombre devient plus grande
* et le point pivot (`transform-origin`) change → ça donne un effet *tilt*

---

## 🎨 Le CSS : À TOI de le coder

Je ne te donne pas le code cette fois.

👉 Je te donne seulement **les directives précises** :

### 🟪 Classe `.exo6-card`

* taille : environ 200px × 120px
* couleur : ce que tu veux
* une petite ombre douce (`box-shadow`)
* transition sur : **transform** + **box-shadow**
* `transform-origin`: **center**

### 🟪 Classe `.exo6-card:hover`

* `transform-origin`: **top left**
* `transform`: inclure

  * `scale(1.05)`
  * `rotate3d` léger (1 ou 2 degrés max)
* ombre plus grande, plus diffuse
* la transition doit rendre le tout *fluide*

---

# 🟦 **Exercice 7 — Démarrer et arrêter une animation CSS avec React**

Tu vas créer un composant contenant un carré statique au départ.
Le but est d’appliquer **une animation CSS (via @keyframes)** uniquement lorsque l’utilisateur clique sur un bouton.

### 🎯 Objectifs

1. Créer un carré (`div`) stylé en CSS.
2. Écrire une animation CSS simple (scale + rotation).
3. Faire en sorte que **l’animation ne tourne que lorsque l’utilisateur clique sur “Animer”**.
4. Pouvoir **arrêter l’animation** en cliquant sur “Arrêter”.
5. Utiliser un état React (`useState`) pour ajouter ou retirer une classe.

### 📝 Contraintes

* L’animation doit être déclarée avec `@keyframes` dans le fichier CSS.
* Le carré **ne doit pas avoir l’animation par défaut**.
* L’animation doit être appliquée **uniquement** quand une classe supplémentaire (ex. `.anime`) est présente.
* Le bouton doit alterner entre :

  * **Animer** (si l'animation est arrêtée)
  * **Arrêter** (si l'animation est active)

### 👉 Résultat attendu

* Un carré bleu statique au début.
* Quand tu cliques sur “Animer”, il se met à bouger (scale + rotation).
* Quand tu cliques sur “Arrêter”, il redevient totalement immobile.

---

Tu as raison : dans cet exercice, je t’ai donné **trop d’éléments prémâchés** → tu n’as pas vraiment eu à réfléchir.
Merci de me le dire, ça me permet d’ajuster pour la suite. 👌

---

# 🧪 **Exercice 8 — Animation en cascade (hover sur parent)**

## 🎯 Objectif

Tu dois créer **trois éléments** (par exemple des carrés).
Quand on survole leur **parent**, ils doivent s’animer **l’un après l’autre**, avec un léger délai entre chaque.

## 📌 Contraintes

* L’animation doit être faite **uniquement avec du CSS** (pas de JS).
* Le déclencheur doit être :
  → *le survol du conteneur*, pas des éléments eux-mêmes.
* Chaque élément doit s’animer avec :
  → un **début décalé** (delay différent par élément)
  → une transformation visuelle (libre : rotation, scale, déplacement…).
* Quand la souris quitte le conteneur, les éléments doivent revenir à l’état initial **de manière fluide**.

## 🧠 Ce que tu dois décider par toi-même

* Quelle propriété tu animes (`transform`, `opacity`, etc.).
* Comment les éléments sont positionnés.
* Quel délai tu appliques à chaque élément.
* La durée et la courbe (`ease`, `ease-in-out`, etc.).
* Le style de l’effet final.

## ✔️ Résultat attendu (but visuel)

Quand on survole la zone :

* le premier élément réagit immédiatement
* le deuxième commence un peu après
* le troisième encore plus tard

→ comme un **effet domino**.

---

## ⚛️ Exercice 9 — Apparition en chaîne avec transition-delay

### 🎯 Objectif :

Apprendre à faire apparaître et disparaître des éléments **les uns après les autres** avec un effet d’animation fluide en utilisant `transition` et `transition-delay` en CSS, tout en contrôlant l’état avec React.

---

### 🧠 Consignes :

1. Crée un composant React nommé **`Exercice9`**.
2. Ajoute **3 cercles** `<div>` que tu pourras faire apparaître ou disparaître.
3. Utilise un **state `visible`** pour savoir si les cercles sont visibles ou cachés.
4. Ajoute un **bouton** pour basculer entre les deux états :

   * `"Apparaître"` → rend les cercles visibles.
   * `"Disparaître"` → cache les cercles.
5. En CSS :

   * Définis l’état **caché** (`opacity: 0`, `scale(0.5)` et translation sur X).
   * Définis l’état **visible** (`opacity: 1`, `scale(1)` et translation X = 0).
   * Ajoute des **delays différents** pour chaque cercle afin qu’ils apparaissent **l’un après l’autre** et disparaissent dans **l’ordre inverse**.

---

### 💡 Indice :

* Tu peux utiliser `nth-child()` pour gérer les `transition-delay` pour chaque cercle.
* Les classes CSS pourraient être : `.circle` pour l’état de base, `.visible` pour l’état affiché, et éventuellement `.reverse` pour l’état caché.
