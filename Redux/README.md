# Ce dossier contient des exercices sur Redux Toolkit

1. Installez les dépendances avec ```npm i```

2. Pour voir le resultat d'un exercice, tapez ```node exo[numero].js```

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

🧩 Exercice 2 — Créer deux slices et un store combiné

Tu vas créer une petite configuration Redux Toolkit composée de **deux slices distincts**, puis envoyer plusieurs actions pour mettre à jour l’état.

## 🎯 Objectif

Créer un store Redux Toolkit contenant :

1. Un **counterSlice** qui gère un compteur numérique
2. Un **userSlice** qui gère l’état de connexion d’un utilisateur

Ensuite, tu devras :

* afficher l’état initial
* modifier l’état de l’utilisateur
* modifier le compteur
* afficher l’état final

---

# 📌 **Détails de ce que tu dois faire**

### 1. Créer un slice `counter`

* name → `"counter"`
* état initial → `{ counter: 0 }`
* reducers :

  * `increment` → augmente le compteur de 1
  * `decrement` → diminue le compteur de 1

### 2. Créer un slice `user`

* name → `"user"`
* état initial → `{ logged: false }`
* reducers :

  * `changeStatus` → inverse la valeur de `logged`

### 3. Configurer le store Redux Toolkit

Le store doit contenir **les deux slices**, sous les clés :

```js
counter: counterSlice.reducer
user: userSlice.reducer
```

### 4. Tester le store

* Affiche `store.getState()` avant les dispatch
* Envoie :

  * `userSlice.actions.changeStatus()`
  * `counterSlice.actions.increment()`
* Affiche `store.getState()` après les dispatch

---

# 🎯 Ce que tu dois obtenir à la fin

L’état final doit être quelque chose comme :

```js
{
  counter: { counter: 1 },
  user: { logged: true }
}
```

---
