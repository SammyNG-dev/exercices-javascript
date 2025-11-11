# 🧠 Exercice 1 — Nombre de rendus

### 🎯 Objectif :

Afficher combien de fois ton composant s’est rendu depuis son premier affichage.

---

### 🧾 Consignes :

1. Crée un composant **`Exercice1UseRef`**.
2. Crée un state `count` initialisé à 0.
3. Crée un ref `renderCount` initialisé à 0.
4. À chaque rendu, incrémente `renderCount.current` de 1.
5. Affiche deux choses :

   * la valeur de `count`
   * le nombre de rendus (`renderCount.current`)
6. Ajoute deux boutons :

   * ➕ pour incrémenter `count`
   * ➖ pour décrémenter `count`

---

### ⚛️ Exercice 2 — Manipuler un élément du DOM avec `useRef`

---

### 🎯 Objectif

Apprendre à utiliser `useRef` pour interagir directement avec un élément du DOM (sans re-render).

---

### 🧠 Consignes

1. Crée un composant nommé **`Exercice2`**.
2. Ajoute un champ de saisie (`<input type="text" />`) et un bouton nommé **"Focus"**.
3. Utilise le hook **`useRef()`** pour créer une référence vers cet input.
4. Quand on clique sur le bouton, l’input doit recevoir automatiquement le **focus** (comme si on avait cliqué dedans).

---

### 💡 Indice

Tu peux associer la ref à l’input comme ceci :

```jsx
const inputRef = useRef(null);

<input ref={inputRef} />
```

Puis y accéder dans ton bouton :

```jsx
onClick={() => inputRef.current.focus()}
```

---

### ✅ Objectif final

Quand tu cliques sur le bouton **Focus**, le curseur clignote immédiatement dans le champ de texte. Aucun re-render n’est déclenché : `useRef` agit directement sur le DOM.

---

# ⚛️ Exercice 3 — Suivre la valeur précédente d’un state avec `useRef`

---

### 🎯 Objectif

Découvrir comment `useRef` peut stocker une valeur **entre deux rendus** sans provoquer de re-render.

---

### 🧠 Consignes

1. Crée un composant nommé **`Exercice3`**.
2. Ajoute un **state `count`** initialisé à `0`.
3. Crée une **ref `previousCount`** avec `useRef()`.
4. Utilise un **`useEffect`** pour mettre à jour `previousCount.current` à chaque fois que `count` change.
5. Affiche à l’écran :

   * la **valeur actuelle** du compteur
   * la **valeur précédente**

---

### 💡 Indice

Tu peux faire :

```jsx
useEffect(() => {
  previousCount.current = count;
}, [count]);
```

Et pour l’affichage :

```jsx
<h1>Actuel : {count}</h1>
<h2>Précédent : {previousCount.current}</h2>
```

---

### 🎯 Bonus (facultatif)

Ajoute deux boutons ➕ et ➖ pour incrémenter ou décrémenter le compteur.

---

# ⚛️ Exercice 4 — Mesurer un élément avec `useRef`

### 🎯 Objectif :

Apprendre à utiliser `useRef` pour **accéder directement à un élément du DOM** et en lire des informations (par exemple sa taille).

---

### 🧠 Consignes :

1. Crée un composant **`Exercice4`**.
2. À l’intérieur, affiche un paragraphe `<p>` avec un texte quelconque.
3. Utilise `useRef` pour **lier une référence** à cet élément.
4. Lorsqu’on clique sur un bouton “Mesurer”, affiche dans la console (ou à l’écran) :

   * la **largeur (`offsetWidth`)**
   * la **hauteur (`offsetHeight`)**
     de cet élément.

---

### 💡 Indices :

* Tu peux créer une ref comme ceci :

  ```js
  const paragraphRef = useRef(null);
  ```

* Puis la lier à ton élément :

  ```jsx
  <p ref={paragraphRef}>Ceci est un paragraphe mesurable.</p>
  ```

* Enfin, accéder aux dimensions :

  ```js
  paragraphRef.current.offsetWidth
  paragraphRef.current.offsetHeight
  ```

---

Excellent réflexe 😄 — tu as parfaitement raison 👏

En fait, ce que je viens de te décrire correspond **exactement** à ton *Exercice 1* du module sur `useRef` (celui où tu comptais les rendus avec `renderCount`).

👉 Donc on **ne le refait pas** : tu maîtrises déjà cette logique.

---

On peut donc passer à un **Exercice 5 différent**, plus avancé, pour explorer un **cas concret d’utilisation combinée** de `useRef`, `useEffect` et `useState`.

# ⚛️ Exercice 5 — Déclencher une action quand un champ change (sans re-render infini)

#### 🎯 Objectif :

Apprendre à utiliser `useRef` pour **stocker une valeur précédente** et **déclencher une action uniquement quand une condition est remplie**.

---

### 🧩 Consignes :

1. Crée un composant **`Exercice5`**.
2. Ajoute :

   ```js
   const [text, setText] = useState("");
   const previousText = useRef("");
   ```
3. Dans un `useEffect`, vérifie :

   * si la valeur du champ `text` est différente de `previousText.current`,
   * alors affiche un `console.log("Texte modifié")`,
   * puis mets à jour `previousText.current` avec la nouvelle valeur.
4. Ajoute un champ texte et affiche la valeur actuelle et précédente dans le JSX.

---

### 💬 Objectif d’apprentissage :

Tu verras comment `useRef` sert à **mémoriser la valeur précédente d’un state** sans redéclencher de rendu — très utile pour détecter les changements ou comparer des états.

---

Parfait 👌 voici **la consigne complète de l’exercice 6**, adaptée exactement à ton code :

---

# 🧩 **Exercice 6 — Contrôler un intervalle avec `useRef`**

#### 🎯 Objectif

Apprendre à utiliser **`useRef`** pour manipuler un `setInterval()` sans provoquer de rerender, et créer un petit compteur que l’on peut **arrêter**, **reprendre** et **réinitialiser**.

---

#### 🧠 Ce que tu dois faire

1. Crée un composant React nommé **`Exercice6`**.
2. Initialise un état `count` avec `useState(0)` pour afficher le nombre de secondes écoulées.
3. Crée une **référence** avec `useRef(null)` pour stocker l’identifiant de l’intervalle.
4. Utilise **`useEffect`** pour lancer un `setInterval()` qui incrémente `count` toutes les 100 ms.

   * Cet intervalle doit être **créé une seule fois au montage** (tableau de dépendances vide `[]`).
   * N’oublie pas de le **nettoyer** dans le `return` du `useEffect`.
5. Ajoute trois boutons :

   * 🟥 **STOP** → stoppe l’intervalle (grâce à `clearInterval(intervalRef.current)`).
   * 🟩 **REPRENDRE** → relance un nouvel intervalle (en recréant le `setInterval`).
   * 🔁 **RESTART** → remet `count` à 0, sans forcément relancer automatiquement si le compteur est arrêté.
6. Ajoute une variable d’état `active` pour gérer si le compteur est actif ou non, et **désactive** les boutons selon ce statut (par exemple : STOP désactivé quand le compteur est déjà arrêté).

---

#### 💡 Points importants à retenir sur `useRef`

* `useRef` **ne provoque jamais de rerender** quand sa valeur change.
* Tu peux t’en servir pour stocker une **valeur mutable** comme un identifiant d’intervalle ou un élément DOM.
* Contrairement à `useState`, la valeur de `useRef` **reste la même** entre les rendus.

---

#### ✅ Exemple visuel du rendu attendu

```
Compteur : 124
[STOP] [REPRENDRE] [RESTART]
```

*(le chiffre augmente automatiquement tant que le compteur n’est pas stoppé)*

---

# ⚛️ **Exercice 7 — Mémoriser une valeur stable avec `useRef`**

### 🎯 Objectif

Utiliser `useRef` pour **conserver une valeur** (ex. une date ou un identifiant) **sans qu’elle soit réinitialisée ni ne provoque de rerender**.

---

### 🧠 Consigne

1. Crée un composant **`Exercice7`**.
2. Au montage du composant, enregistre **l’heure de démarrage** dans une référence :

   ```js
   const startTimeRef = useRef(new Date());
   ```
3. Ajoute un **state `count`** initialisé à 0.
4. Chaque fois que tu cliques sur un bouton **“+1”**, incrémente `count`.
5. Affiche à l’écran :

   * La valeur actuelle du compteur.
   * L’heure de démarrage du composant (`startTimeRef.current.toLocaleTimeString()`).
6. Vérifie que l’heure de démarrage **ne change jamais**, même après plusieurs incréments.

---

### 💡 À retenir

* Une variable déclarée dans le corps du composant (ex. `const start = new Date()`) **serait recréée à chaque rendu**.
* Une référence `useRef()` garde **la même valeur entre les rendus**.
* C’est très utile pour **mémoriser des infos non visuelles** (horodatage, identifiant, instance d’objet, etc.).

---
