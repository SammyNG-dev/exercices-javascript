# Exercice 1 — Afficher la valeur du compteur Redux

**Objectif :**
Lire et afficher l’état global d’un slice Redux dans un composant React.

**Instructions :**

1. Crée un composant `Exercice1.jsx`.
2. Importe `useSelector` depuis `react-redux`.
3. Utilise `useSelector` pour lire la valeur du compteur depuis le store Redux :

```js
const { counter } = useSelector((state) => state.counter);
```

4. Affiche la valeur dans le JSX, par exemple :

```jsx
<h1>Compteur : {counter}</h1>
```

5. Ajoute un lien pour revenir à l’accueil si tu veux :

```jsx
<Link to="/">Revenir en arrière</Link>
```

**Résultat attendu :**

* La valeur du compteur doit s’afficher correctement depuis le store Redux.
* Aucun bouton d’action pour modifier la valeur (cela viendra dans l’exercice suivant).

---

# 🧪 **Exercice 2 — Créer un compteur interactif avec Redux**

## 🎯 Objectif

Apprendre à utiliser **useSelector**, **useDispatch**, et des actions Redux pour modifier l’état global depuis une interface React.

---

## 📝 **Ce que tu dois faire**

1. **Lire la valeur du compteur** depuis le store Redux grâce à `useSelector`.
2. **Créer deux boutons** :

   * un bouton **+1** qui déclenche l’action `increment()`
   * un bouton **–1** qui déclenche l’action `decrement()`
3. **Mettre à jour l'affichage du compteur en direct**, sans state local, uniquement via Redux.
4. Ajouter un lien permettant de **revenir à la page d’accueil**.

---

## ✔️ **Résultat attendu**

Tu dois obtenir une page **React** avec :

* Le compteur affiché (`Compteur : X`)
* Deux boutons qui modifient le store Redux :

  * **+1** → dispatch `increment()`
  * **–1** → dispatch `decrement()`
* Le compteur doit se mettre à jour immédiatement grâce au state global.

---

# 🧪 **Exercice 3 — Formulaire contrôlé + Mise à jour du store Redux**

### 🎯 Objectif

Apprendre à modifier une partie du state Redux via un formulaire React, en gardant l’input dans un state local et en dispatchant une action pour mettre à jour le store.

---

### 📝 Ce que tu dois réaliser

1. **Créer un slice `userSlice`** contenant l’état initial :

```js
{
  name: "Sammy",
  email: ""
}
```

2. Ajouter un reducer `setEmail` permettant de mettre à jour `state.email`.

3. Intégrer ce slice dans le store Redux existant.

4. Dans une page React dédiée :

   * afficher le **nom** et l’**email** provenant du store via `useSelector`
   * créer un `input` contrôlé avec `useState`
   * ajouter un bouton “Mettre à jour l’email”
   * au clic : `dispatch(setEmail(valeurSaisie))`

5. Afficher immédiatement la nouvelle valeur de l’email grâce à Redux.

---

### ✔️ Résultat attendu

Une page affichant :

* Nom : Sammy
* Email : (valeur Redux)
* Un input pour saisir un nouvel email
* Un bouton pour déclencher la mise à jour
* L’email se met à jour instantanément dans le store et à l’écran

---

# 📝 **Exercice 4 – Gestion d’une Todo List avec Redux (CRUD + Toggle)**

## 🎯 Objectif

Créer un système complet de **Todo List** géré avec **Redux Toolkit**, comprenant :

* ajout d’une tâche
* suppression d’une tâche
* changement d’état (fait / pas fait)
* affichage dynamique en fonction du store Redux

L’objectif est de manipuler un state plus complexe et de composer plusieurs actions pour modifier ce state.

---

## 🧩 Ce que tu dois faire

### 1. **Créer un slice `todoSlice`**

* Le state doit contenir un tableau `todo` d’objets.
* Chaque todo doit avoir :

  ```js
  { id: number, todo: string, done: boolean }
  ```
* Créer les reducers suivants :

  * **addTodo(payload)** → ajoute une nouvelle tâche (avec un id unique)
  * **removeTodo(id)** → supprime une tâche par son id
  * **toggleTodo(todo)** → inverse la valeur `done` d'une tâche

---

### 2. **Ajouter le reducer dans le store**

Dans `store.js`, ajouter ton reducer sous la clé `todo`.

---

### 3. **Créer la page `Exercice4.jsx`**

Elle doit :

✔ afficher toutes les tâches provenant du store
✔ afficher un `(Fait)` si `done === true`
✔ cocher/décocher une tâche via `toggleTodo`
✔ ajouter une nouvelle tâche via un input
✔ supprimer une tâche via `removeTodo`
✔ réinitialiser le champ après ajout

---

## ✅ Résultat attendu

Une Todo List fonctionnelle où :

* Chaque modification passe par Redux
* Le state est **immutably** mis à jour
* L’interface réagit instantanément aux actions dispatchées

---

# Exercice 5 : TodoList avec colonnes “À faire”, “En cours” et “Fait”

### Objectif

Créer une **TodoList avancée** en React + Redux où les tâches sont organisées en **trois colonnes** selon leur statut : `À faire`, `En cours` et `Fait`.

---

### Instructions

1. **Structure de l’état**

   * Utiliser un `slice` Redux nommé `todo2` avec l’état initial :

     ```js
     {
       aFaire: [],
       enCours: [],
       fait: []
     }
     ```

2. **Reducers à créer**

   * `addAFaire` : ajoute une nouvelle tâche à la colonne `À faire` avec un identifiant unique.
   * `moveToEnCours` : déplace une tâche de `À faire` vers `En cours`.
   * `moveToFait` : déplace une tâche de `En cours` vers `Fait`.
   * `removeTask` : supprime une tâche de la colonne `À faire`.
   * `emptyLists` : vide toutes les colonnes.

3. **Composant React**

   * Créer une page `Exercice5.jsx` qui :

     * Affiche chaque colonne avec ses tâches.
     * Permet d’ajouter une nouvelle tâche dans `À faire`.
     * Permet de déplacer les tâches d’une colonne à l’autre via des boutons.
     * Permet de supprimer une tâche dans `À faire`.
     * Permet de vider toutes les colonnes via un bouton global.
   * Utiliser `useSelector` pour lire l’état et `useDispatch` pour déclencher les actions.

4. **Bonus**

   * Afficher les tâches de chaque colonne de manière visuelle (ex. : trois colonnes côte à côte).
   * Ajouter un champ `done` pour marquer visuellement qu’une tâche est terminée dans la colonne `Fait`.

---

# 🧪 **Exercice 6 – Ajouter la persistance localStorage à l’application de l’Exercice 5**

## 🎯 Objectif

À partir de **tout ce que tu as déjà réalisé dans l’Exercice 5**
(colonnes "À faire", "En cours", "Fait", les reducers, les déplacements, l’affichage stylé, etc.),
tu dois maintenant **ajouter une nouvelle fonctionnalité : la persistance via localStorage.**

L’objectif final est que :

* toutes les tâches soient **sauvegardées automatiquement** après chaque action,
* et **restaurées automatiquement au rechargement de la page**, avec **les mêmes IDs** et dans **la bonne colonne**.

---

# 🧩 Ce que tu dois ajouter par rapport à l’Exercice 5

### 1️⃣ **Lire le localStorage au démarrage**

Dans `Exercice6.jsx` :

* utiliser `useEffect()` au premier rendu
* lire les clés :

  * `"aFaire"`
  * `"enCours"`
  * `"fait"`
* parser le JSON
* redispatcher chaque item dans Redux (en passant l’objet complet pour garder l’id)

💡 Tu peux **factoriser** avec une fonction `dispatchLocalStorage(key, reducer)` pour éviter la duplication.

---

### 2️⃣ **Mettre à jour le localStorage après chaque action**

Après chaque `dispatch()` :

* quand on ajoute une tâche
* quand on déplace une tâche vers une autre colonne
* quand on supprime
* quand on vide les listes

→ tu dois appeler `localStorage.setItem()` pour mettre à jour les données.

---

### 3️⃣ **Modifier légèrement ton slice**

Le slice `todoSlice3.js` doit pouvoir :

* accepter une **string** → créer un nouvel objet `{id, name}`
* accepter un **objet complet** → simplement le push (pour restaurer le localStorage)

Tu peux faire ça avec :

```js
if (typeof action.payload === "object") {
  // push direct
}
```

---

### 4️⃣ **Ajouter le bouton “Vider la to-do list”**

Il doit :

* vider les 3 listes Redux via `emptyLists()`
* vider les 3 clés dans le localStorage

---

# ✔ Résultat attendu

À la fin :

* Tu gardes **tout** l’affichage et les fonctionnalités de l’Exercice 5
* Tu ajoutes **la persistance complète** avec localStorage
* Si tu reload la page :

  * les tâches reviennent
  * dans la bonne colonne
  * avec les mêmes IDs
* L’UX est cohérente : ajouter, supprimer, déplacer, recharger → tout fonctionne comme dans une vraie app.

---

# 📝 **Exercice 7 – Refactorisation + Persistance dans le LocalStorage + Structure en Composants**

Dans cet exercice, tu vas **reprendre l’intégralité du travail effectué dans l’Exercice 5 et l’Exercice 6**, mais en allant plus loin sur deux points essentiels :

1. **La factorisation du code**, en séparant clairement :

   * l’ajout de tâches,
   * les trois colonnes (À faire, En cours, Fait),
   * la page Exercice7.jsx.

2. **La persistance globale via le LocalStorage**, à chaque modification de liste *et* au chargement initial de la page.

L’objectif est d’obtenir une **mini application ToDo-List organisée en 3 colonnes**, entièrement gérée par **Redux Toolkit**, **React**, et **LocalStorage**, de manière propre et scalable.

---

## 🎯 **Objectifs pédagogiques**

### ✔ Réutiliser tout ce qui a été construit dans les Exercices 5 et 6

* Le slice Redux (`todoSlice3`) avec ses reducers : `addAFaire`, `moveToEnCours`, `moveToFait`, `removeTask`, `emptyLists`, etc.
* Le store Redux.
* La gestion des mouvements de tâches entre colonnes.

### ✔ Comprendre et mettre en place une **refactorisation concrète**

Tu vas apprendre à découper une page longue en **composants spécialisés**, pour obtenir un code plus propre et maintenable.

### ✔ Charger automatiquement les données depuis le LocalStorage au montage du composant

Tu utiliseras :

```js
useEffect(() => {
  ...
}, []);
```

et tu construiras une fonction utilitaire :

```js
const dispatchLocalStorage = (key, callback) => { ... }
```

pour éviter la duplication de code.

### ✔ Sauvegarder le state Redux dans le LocalStorage à chaque interaction

* Lors de l’ajout d’une tâche
* Lors du passage À faire → En cours
* Lors du passage En cours → Fait
* Lors de la suppression d’une tâche
* Lors du reset total de la to-do list

---

## 📦 **Ce que tu dois produire**

### 🔹 1. Un composant `AddTask.jsx`

* Un input contrôlé avec `useState`.
* Un bouton "Ajouter une tâche".
* Appel à `dispatch(addAFaire(...))`.
* Mise à jour du LocalStorage après le dispatch.

### 🔹 2. Trois colonnes séparées en composants :

#### `AFaireColumn.jsx`

* Affiche la liste `aFaire`.
* Bouton **"Let’s go !"** pour envoyer la tâche dans `enCours`.
* Bouton **"Supprimer tâche"**.
* Mise à jour du LocalStorage à chaque action.

#### `EnCoursColumn.jsx`

* Affiche la liste `enCours`.
* Bouton **"C’est fait !"** pour envoyer la tâche dans `fait`.
* Mise à jour du LocalStorage.

#### `FaitColumn.jsx`

* Affiche la liste `fait`.
* Pas de boutons ici.

### 🔹 3. Un composant principal `Exercice7.jsx`

Qui doit contenir :

#### ✔ La fonction factorisée :

```js
const dispatchLocalStorage = (key, callback) => { ... }
```

#### ✔ Le chargement initial :

```js
useEffect(() => {
  dispatchLocalStorage("aFaire", addAFaire)
  dispatchLocalStorage("enCours", moveToEnCours)
  dispatchLocalStorage("fait", moveToFait)
}, [])
```

#### ✔ L’affichage des trois colonnes :

```jsx
<AFaireColumn aFaire={aFaire} />
<EnCoursColumn enCours={enCours} />
<FaitColumn fait={fait} />
```

#### ✔ Le bouton pour vider toutes les listes :

* Appel de `dispatch(emptyLists())`
* Set des trois clés du LocalStorage à `[]`

#### ✔ Un lien pour revenir au menu principal.

---

## 🔥 **Ce que tu valideras avec cet exercice**

* Tu sais découper proprement une application React.
* Tu maîtrises Redux Toolkit dans un cas réel.
* Tu es capable de persister et recharger des données via LocalStorage.
* Tu mets en place une logique complète de ToDo-List en utilisant les meilleures pratiques.
* Tu as écrit un code propre, factorisé, maintenable.

---
