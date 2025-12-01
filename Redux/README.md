# Ce dossier contient des exercices sur Redux Toolkit

Pour voir le resultat d'un exercice, tapez ```node exo[numero].js```

---

# 🧩 Exercice 1 — Compteur Redux Toolkit

### 🎯 Objectif

Créer un **compteur Redux** qui peut s’incrémenter et se décrémenter, en utilisant **Redux Toolkit** (`createSlice` + `configureStore`).

---

### Étapes à réaliser

1. Crée un **slice** nommé `counterSlice` avec :

   * un `initialState` `{ counter: 0 }`
   * deux reducers :

     * `increment` → ajoute 1 à `counter`
     * `decrement` → retire 1 à `counter`

2. Crée un **store** avec `configureStore`, en utilisant le reducer de ton slice.

3. Envoie des actions au store avec `store.dispatch` :

   * une fois `increment`
   * une fois `decrement`

4. Affiche l’état du store après chaque action avec `console.log`.

---

### ✅ Attendus

* Après `increment` → `{ counter: { counter: 1 } }`
* Après `decrement` → `{ counter: { counter: 0 } }`

---