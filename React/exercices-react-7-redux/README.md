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
