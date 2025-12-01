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

# 🧩 Exercice 2 — Créer deux slices et un store combiné

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

## 📌 **Détails de ce que tu dois faire**

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

# 📝 **Exercice 3 — Todo Slice**

### 🎯 Objectif

Créer un slice Redux Toolkit pour gérer une liste de tâches.

### Étapes

1. Crée un slice `todoSlice` avec :

   * `name`: `"todo"`
   * `initialState`: `{ todo: [] }`
   * un reducer `addTodo` qui ajoute une nouvelle tâche reçue en **payload**.

2. Crée un store avec `configureStore` en utilisant le reducer du slice.

3. Dispatch quelques actions `addTodo` pour ajouter des tâches :

   * `"faire les courses"`
   * `"manger un kebab"`

4. Affiche l’état du store avant et après chaque dispatch avec `console.log`.

---

# 📝 **Exercice 4 — User Slice**

### 🎯 Objectif

Créer un slice pour gérer les informations d’un utilisateur.

### Étapes

1. Crée un slice `userSlice` avec :

   * `name`: `"user"`
   * `initialState`: `{ name: "Sammy", email: "" }`
   * un reducer `setEmail` qui met à jour l’email de l’utilisateur depuis un **payload**.

2. Crée un store avec `configureStore` en utilisant ce reducer.

3. Dispatch l’action `setEmail` avec un email de test, par exemple `"user@gmail.com"`.

4. Affiche l’état du store avec `console.log`.

---

# 📝 **Exercice 5 — Cart Slice**

### 🎯 Objectif

Créer un slice pour gérer un panier d’achats.

### Étapes

1. Crée un slice `cartSlice` avec :

   * `name`: `"cart"`
   * `initialState`: `{ cart: [] }`
   * un reducer `addToCart` qui ajoute un **objet article** reçu en **payload** au tableau `cart`.

2. Crée un store avec `configureStore` en utilisant ce reducer.

3. Dispatch l’action `addToCart` avec un objet exemple :

```js
{
  id: 1,
  name: "Meta Quest 3s",
  price: 299
}
```

4. Affiche le contenu du store ou du slice avec `console.log` pour vérifier que l’article a été ajouté.

---