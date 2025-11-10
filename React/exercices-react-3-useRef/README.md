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

