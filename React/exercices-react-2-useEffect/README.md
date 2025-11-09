# ⚛️ Exercice 1 — Déclenchement de base

## 🎯 Objectif :

Découvrir comment `useEffect` s’exécute à chaque rendu et comment limiter son exécution à certains changements.

---

## 🧠 Consigne :

Crée un composant React nommé **`Exercice1`**.

1. Ajoute un **state `count`** initialisé à `0`.
2. Affiche ce compteur à l’écran et ajoute **deux boutons** :
   ➕ pour l’incrémenter,
   ➖ pour le décrémenter.
3. Utilise **`useEffect`** pour afficher un message dans la console :

   * `"Le composant a été rendu"` à chaque rendu.
   * `"Le compteur a changé"` uniquement quand `count` change.

---

## 💡 Indice :

Tu vas devoir utiliser deux `useEffect` :

```js
useEffect(() => {
  console.log("Le composant a été rendu");
});

useEffect(() => {
  console.log("Le compteur a changé !");
}, [count]);
```

# ⚛️ Exercice 2 — Compteur automatique avec `useEffect`

## 🎯 Objectif :

Apprendre à utiliser `useEffect` pour gérer du code qui s’exécute **dans le temps** (side effect : intervalle).
Tu vas créer un **compteur automatique** qui s’incrémente tout seul chaque seconde, puis s’arrête après un certain seuil.

---

## 🧠 Consigne :

1. Crée un composant **`Exercice2`**.
2. Ajoute un **state `count`** initialisé à `0`.
3. Dans un `useEffect`, crée un **intervalle** qui :

   * incrémente `count` de 1 toutes les secondes ;
   * s’arrête automatiquement quand `count` atteint **5** ;
   * est **nettoyé** correctement à la fin du cycle de vie du composant (`clearInterval`).
4. Affiche le compteur à l’écran sous la forme :

   ```jsx
   <h1>Compteur automatique : {count}</h1>
   ```

  ```js
  setCount((prev) => prev + 1);
  ```

  pour toujours avoir la dernière valeur à jour.

---

Voici une version adaptée de la consigne pour ton composant actuel :

---

# ⚛️ Exercice 3 — Compteur avec `useEffect` et désactivation du bouton

### 🎯 Objectif :

Apprendre à utiliser `useEffect` pour modifier le titre du document et gérer un état conditionnel pour désactiver un bouton.

---

### 🧠 Consigne :

Crée un composant React nommé **`Exercice3`** :

1. Ajoute un **state `count`** initialisé à `0`.
2. Affiche deux boutons :

   * ➕ pour incrémenter `count`
   * ➖ pour décrémenter `count`
3. Utilise `useEffect` pour mettre à jour le **titre du document** à chaque changement de `count` :
   `"Compteur X"` où X est la valeur actuelle.
4. Désactive le bouton ➖ lorsque `count` est égal à `0`.
5. Ajoute un lien pour revenir à la page d’accueil du projet.

---

### 💡 Astuce :

* Pour désactiver un bouton :

```jsx
<button disabled={count === 0}>-1</button>
```

* `useEffect` doit dépendre de `count` pour se déclencher à chaque changement.

---

# ⚛️ Exercice 4 — Compteur automatique avec arrêt

### 🎯 Objectif :

Apprendre à utiliser `useEffect` pour créer un **side effect** récurrent (intervalle) et gérer correctement le nettoyage (`clearInterval`) pour éviter les comportements indésirables.

---

### 🧠 Consigne :

Crée un composant React nommé **`Exercice4`** :

1. Ajoute un **state `count`** initialisé à `0`.
2. Utilise `useEffect` pour créer un **intervalle** qui incrémente `count` toutes les secondes.
3. Lorsque `count` atteint `10`, arrête l’incrémentation automatiquement.
4. Affiche la valeur de `count` dans le composant.

---

### 💡 Indices / pièges à éviter :

* Tu ne dois **pas passer `count` directement** dans l’intervalle sans fonction de mise à jour sûre, sinon tu risques un **stuck count** ou un comportement infini.
* N’oublie pas de **nettoyer l’intervalle** dans le `useEffect` pour éviter les fuites mémoire :

```js
useEffect(() => {
  const interval = setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);
```

---

Voici une consigne adaptée à ton composant :

---

# ⚛️ Exercice 5 — Compteur dégressif et chargement d’utilisateurs

### 🎯 Objectif :

Apprendre à combiner **useState** et **useEffect** pour gérer à la fois des **effets de side effect** (compteur automatique et affichage conditionnel) et la **récupération de données simulée**.

---

### 🧠 Consigne :

Crée un composant React nommé **`Exercice5`**.

1. Crée trois états :

   * `count` initialisé à `5` pour le compteur.
   * `show` initialisé à `true` pour afficher ou masquer le compteur.
   * `users` initialisé à `null` pour stocker la liste des utilisateurs.

2. Utilise un **`useEffect`** pour :

   * Décrémenter automatiquement `count` toutes les secondes (`setInterval`).
   * Quand `count` atteint `1`, bascule la valeur de `show` pour cacher le compteur.
   * Simuler la récupération de données avec un **`setTimeout`** de 5 secondes pour remplir `users` avec un tableau d’objets `{ id, name }`.

3. Affiche à l’écran :

   * Le compteur seulement si `show` est vrai.
   * La liste des utilisateurs une fois qu’elle est disponible.

4. N’oublie pas de **nettoyer** le `setInterval` et le `setTimeout` dans le `return` du `useEffect` pour éviter des effets de bord.

5. Ajoute un lien pour revenir à la page d’accueil avec `react-router-dom`.


---

Ce composant te permettra de bien comprendre comment gérer plusieurs side effects avec un seul `useEffect` et comment combiner timers et états conditionnels.
