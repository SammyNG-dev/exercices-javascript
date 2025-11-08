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
