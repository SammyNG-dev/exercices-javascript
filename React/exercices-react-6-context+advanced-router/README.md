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

# ✅ Exercice 3 : Mettre à jour un pseudonyme**

### 🎯 Objectif

Créer une page permettant de **modifier dynamiquement un champ du context** (le `username`) en utilisant :

* un **context React** déjà existant
* un **formulaire contrôlé**
* la navigation avec **React Router**

---

# 📌 **Consignes**

### 1) Ajoute une nouvelle page

Créer un composant accessible via une route dédiée, par exemple :

```
/change-username
```

Ce composant doit permettre à l’utilisateur de modifier le `username` stocké dans le context.

---

### 2) Formulaire contrôlé

Dans cette nouvelle page, tu dois :

* afficher un champ `<input>` contrôlé par un `useState`
* permettre à l’utilisateur de saisir une nouvelle valeur de username

---

### 3) Mise à jour du Context

À la validation (bouton), tu dois :

* appeler `setUsername()` provenant du context
* transmettre la nouvelle valeur saisie

---

### 4) Navigation automatique

Après avoir mis à jour le username :

* rediriger automatiquement l’utilisateur vers la page affichant le message et le username (exercice 3)
* utiliser `useNavigate()` pour effectuer cette redirection

---

### 5) Liens de navigation

La page doit aussi contenir un lien `Revenir en arrière` qui renvoie vers la page d’exercice 3.

---

### 6) Page affichant le résultat

Dans ta page `Exercice3`, afficher :

* le `message`
* le `username` mis à jour

Et un lien permettant d’aller modifier ce username.

---

# 🎯 Résultat attendu

Tu obtiens :

* une page `Exercice3` qui affiche le username du context
* une page `/change-username` qui permet de le modifier
* une redirection automatique vers l’exercice 3 après modification
* le tout en utilisant **context + router + formulaire contrôlé**

---

# ✅ **Exercice 4 : Notifications avec Context + Router**

### 🎯 **Objectif**

Créer un mini système de notifications globales utilisant le **Context** et la **navigation React Router**. L’utilisateur doit pouvoir :

1. Voir la liste des notifications.
2. Ajouter une nouvelle notification depuis une autre page.

---

### 📌 **Consignes**

1. **Dans ton context `MessageContext.jsx` :**

   * Ajouter un state `notifications` initialisé à `[]`.
   * Ajouter une fonction `addNotification(text)` qui ajoute une nouvelle notification au tableau sous forme `{ id: Date.now(), notif: text }`.

2. **Créer la page `Exercice4.jsx` (`/exo4`) :**

   * Récupérer `notifications` depuis le context.
   * Si la liste est vide, afficher `Aucune notification`.
   * Sinon, afficher toutes les notifications dans une `<ul>` avec `<li>` par notification.
   * Ajouter un lien vers `/add-notification` pour ajouter une nouvelle notification.
   * Ajouter un lien pour revenir à l’accueil.

3. **Créer la page `AddNotification.jsx` (`/add-notification`) :**

   * Un `<input>` contrôlé pour saisir le texte de la notification.
   * Un bouton "Ajouter" qui :

     * appelle `addNotification(value)`
     * redirige vers `/exo4`
   * Un lien pour revenir à `/exo4` sans ajouter de notification.

4. **Mettre à jour ton Router (`main.jsx`) :**

   * Ajouter les routes `/exo4` → `Exercice4` et `/add-notification` → `AddNotification`.

---

### 🎯 **Résultat attendu**

* Tu peux ajouter une notification depuis `/add-notification`.
* Elle apparaît immédiatement sur `/exo4`.
* Navigation fluide entre les pages.
* Gestion correcte d’un tableau dans le context (immutabilité respectée).