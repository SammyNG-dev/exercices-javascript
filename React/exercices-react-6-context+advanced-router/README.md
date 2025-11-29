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

---

# Exercice 5 – Compteur avec Context

**Objectif** : Créer un compteur global accessible depuis n’importe quel composant grâce au Context et manipuler ses actions avec React Router.

**Consignes** :

1. Crée un contexte `CounterContext` qui contient :

   * un état `count` initialisé à `0`,
   * une fonction `increment` qui ajoute 1 à `count`,
   * une fonction `decrement` qui retire 1 à `count`,
   * une fonction `reset` qui remet `count` à 0.
2. Dans le composant `Exercice5`, récupère ces valeurs et fonctions depuis le contexte.
3. Affiche la valeur du compteur et trois boutons :

   * **+1** → appelle `increment`
   * **-1** → appelle `decrement`
   * **Reset** → appelle `reset`
4. Ajoute un lien pour revenir à l’accueil.

**Points travaillés** :

* Création et utilisation d’un Context dédié.
* Gestion d’état global avec `useState`.
* Partage de fonctions et d’état entre composants.
* Navigation simple avec React Router.

---

# 📝 **Exercice 6 — Créer un système d’historique avec un Context dédié**

Tu vas créer un **HistoryContext** permettant d’enregistrer, d’afficher et de gérer un historique d’actions.
L’objectif est de pratiquer :

* la création d’un Context indépendant,
* la gestion d’un tableau dans un provider,
* l’ajout, la suppression et la réinitialisation de données,
* la navigation entre plusieurs pages via React Router.

### 🎯 **Ce que tu dois faire**

1. **Créer un HistoryContext** avec :

   * `history` : un tableau d’objets `{ id, text }`,
   * `addEntry(text)` : ajoute une entrée,
   * `removeEntry(id)` : supprime une entrée précise,
   * `clearHistory()` : vide entièrement l’historique.

2. **Créer une page Exercice6** qui :

   * affiche la liste des entrées de l’historique,
   * affiche un message *“Aucun historique à afficher”* si le tableau est vide,
   * propose :

     * un bouton pour vider tout l’historique,
     * un lien vers une page permettant d’ajouter une entrée,
     * un lien pour revenir au menu.

3. **Créer une page AddHistory** avec :

   * un input contrôlé,
   * un bouton qui ajoute une entrée dans `history` via `addEntry`,
   * puis redirige vers `/exo6`.

---

# Exercice 7 – Gestion du thème avec Context

**Objectif :**
Créer un système de thèmes clair/sombre pour ton application en utilisant **Context**.

**Consignes :**

1. Crée un `ThemeContext` avec :

   * un état `theme` initialisé à `"light"`
   * une fonction `toggleTheme` pour passer de `"light"` à `"dark"` et inversement

2. Utilise un `useEffect` pour ajouter la classe correspondant au thème (`"light"` ou `"dark"`) sur l’élément `<body>` à chaque changement de thème.

3. Crée un composant `ToggleThemeButton` qui :

   * récupère `theme` et `toggleTheme` depuis le context
   * affiche un bouton qui change le thème au clic
   * le texte du bouton doit refléter le thème actuel (par ex. `"Toggle Dark"` si le thème est clair)

4. Intègre `ThemeContextProvider` dans ton application pour que le contexte soit disponible dans toute l’application.

5. Place ton `ToggleThemeButton` dans `App.jsx` pour pouvoir tester le changement de thème.

**But final :**

* Quand tu cliques sur le bouton, le thème de l’application change entre clair et sombre, et la classe correspondante est appliquée au `<body>`.

---

# **Exercice 8 – Thème et Card dynamique**

1. Crée un contexte `ThemeContext` qui contient :

   * `theme` : une chaîne `"light"` ou `"dark"`
   * `toggleTheme` : une fonction pour basculer entre `"light"` et `"dark"`

2. Dans le `ThemeContextProvider`, applique le thème actuel au `<body>` en ajoutant la classe correspondante (`light` ou `dark`).

3. Crée un composant `ToggleThemeButton` :

   * Il affiche `"Toggle Dark"` si le thème est `"light"` et `"Toggle Light"` si le thème est `"dark"`.
   * Au clic, il bascule le thème via `toggleTheme`.

4. Crée un composant `Card` :

   * Il doit adapter sa couleur de fond à l’inverse du thème actuel :

     * `"dark"` → fond clair
     * `"light"` → fond sombre

5. Dans la page `Exercice8` :

   * Affiche le thème actuel
   * Affiche la `Card`
   * Affiche le `ToggleThemeButton`
   * Ajoute un lien pour revenir à l’accueil

> Objectif : comprendre comment utiliser un contexte pour gérer un thème global et adapter dynamiquement l’affichage des composants.

---

# **Exercice 9 – Persister le thème dans le localStorage**

Dans cet exercice, tu vas améliorer ton système de thème pour qu’il reste actif même après un rafraîchissement de la page.

**1. Dans ton `ThemeContextProvider` :**

* Au montage du composant, lis `localStorage` pour récupérer le dernier thème choisi (sinon utilise `"light"` par défaut).
* À chaque changement de thème, enregistre la valeur dans `localStorage`.

**2. Le reste du code (`Card`, `ToggleThemeButton`, etc.) ne change pas.**
Tu dois juste t’assurer que le thème sauvegardé est bien appliqué au `body` au premier rendu.

**Objectif :**
Comprendre comment synchroniser un contexte React avec le `localStorage`.

---

# 🧪 **Exercice 10 — Synchroniser automatiquement les notifications avec le localStorage**

## 🎯 Objectif

Tu vas rendre ton **MessageContext** persistant :

* Lors du chargement de l'application, tu dois restaurer les notifications depuis le `localStorage`.
* Chaque fois que les notifications changent, tu dois les sauvegarder automatiquement.

Tu dois également t’assurer que les données récupérées sont valides pour éviter les plantages.

---

## 📝 **Consigne**

Dans ton fichier **MessageContext.jsx**, mets en place deux effets :

---

### **1️⃣ Récupération des notifications au chargement**

Crée un `useEffect` qui s’exécute uniquement au montage du composant.
Il doit :

* Lire la valeur `"notifications"` dans `localStorage`.
* Tenter de la parser avec `JSON.parse`.
* Vérifier que la valeur obtenue est **un tableau**.
* Si oui → remplir ton state `notifications` avec cette valeur.
* Si non → ignorer silencieusement ou afficher une erreur dans la console.

---

### **2️⃣ Sauvegarde automatique des notifications**

Crée un deuxième `useEffect` qui :

* Observe `notifications`.
* À chaque modification, sauvegarde la valeur dans `localStorage` via
  `localStorage.setItem("notifications", JSON.stringify(notifications))`.

---

## 🔚 Résultat attendu

Ton contexte doit maintenant :

* Se souvenir des notifications entre deux rechargements de page.
* Toujours valider le format des données.
* Ne jamais planter même si le localStorage contient des données corrompues.

---

Si tu veux, je peux te proposer l’Exercice 11 maintenant.
