# 📝 **Exercice 1 – Afficher un message global avec la Context API et React Router**

## 🎯 Objectif

Créer un **Context React** contenant un message global, l’injecter via un **Provider**, puis l’afficher dans **plusieurs pages** de ton application utilisant **React Router**.

---

## 🧩 Ce que tu dois faire

### 1. **Créer un context MessageContext**

* Il doit contenir un objet `{ message: "Bonjour depuis le context" }`.
* Le provider doit entourer toute ton application (donc autour du `RouterProvider`).

### 2. **Créer un hook personnalisé `useMessageContext()`**

* Il doit lire la valeur du context avec `useContext`.
* Il doit lancer une erreur si le hook est utilisé en dehors du Provider.

### 3. **Afficher le message dans deux pages**

* Par exemple dans les composants :

  * `Exercice1`
  * `About`
* Ces composants doivent récupérer le message via le hook et l’afficher dans un `<h1>`.

### 4. **Tester la navigation**

* Naviguer entre `/about` et `/exo1` doit afficher le même message, provenant du context.

---

## ✔️ **Résultat attendu**

* Le message **ne se trouve pas dans les composants**, mais seulement dans le Context Provider.
* Les pages lisent le message via `useMessageContext`.
* Le message s’affiche correctement sur chaque route.

---

# 🧩 Exercice 2 — Modifier un état global

## 🎯 Objectif

Créer une page qui affiche un message provenant d’un Context global préexistant, et une seconde page permettant de modifier ce message, avec une redirection automatique après la mise à jour.

## 📂 Contexte du projet

Tu travailles dans l’arborescence suivante :

```
src/
 ├── context/MessageContext.jsx
 ├── pages/
 │    ├── Exercice2.jsx
 │    ├── ChangerMessage.jsx
 │    └── (...)
```

Le Context contient déjà une valeur `message` et une fonction `setMessage`.

---

## 📝 Consigne

1. Dans la page **Exercice2.jsx**, affiche le message provenant du Context et ajoute une navigation permettant d’aller vers la page **ChangerMessage.jsx**.
2. Dans la page **ChangerMessage.jsx**, mets en place un formulaire minimal permettant de modifier la valeur du message dans le Context, puis redirige l’utilisateur vers **Exercice2.jsx** une fois la modification effectuée.

---