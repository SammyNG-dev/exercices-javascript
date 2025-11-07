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

### 💡 Indice :

Tu vas devoir utiliser deux `useEffect` :

```js
useEffect(() => {
  console.log("Le composant a été rendu");
});

useEffect(() => {
  console.log("Le compteur a changé !");
}, [count]);
```

