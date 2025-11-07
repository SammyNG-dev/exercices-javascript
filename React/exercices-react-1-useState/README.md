# Exercices React

Ce petit projet React vise à s'entaîner à utiliser le hook ```useState```

Parfait 👌
On va commencer *simple mais utile*, histoire de poser les bases de React : **états, événements et rendu dynamique.**

---

## ⚛️ Exercice React 1 — Compteur interactif

### 🎯 Objectif :

Créer un petit composant React qui affiche un compteur avec **+1** et **-1**.

---

### 🧩 Énoncé :

Dans ton fichier `App.jsx`, affiche un **nombre** qui commence à `0`.
Ajoute deux boutons :

* ➕ un bouton “Incrémenter” qui ajoute **1**
* ➖ un bouton “Décrémenter” qui enlève **1**

Chaque clic doit **mettre à jour le nombre affiché en temps réel**.

### 🖥️ Résultat attendu :

Quand tu ouvres ton app :

```
Compteur : 0
[ + ] [ - ]
```

Et quand tu cliques sur les boutons, la valeur change dynamiquement :
```
Compteur : 3
```

Parfait 😎, on peut attaquer l’exercice 2. Voici l’énoncé sous forme “React” pour ta page `Exercice2.jsx` :

---

## Exercice 2 — Compteur avec bouton +10

**Énoncé** :
Crée un composant React `Exercice2` avec un **compteur** initialisé à `0`.

➡️ Le composant doit afficher :

* La valeur du compteur
* Un bouton **+10** qui augmente le compteur de 10
* Un bouton **-5** qui diminue le compteur de 5

Utilise **`useState`** pour gérer le compteur.

➡️ Exemple de rendu :

```
Compteur : 0
[ +10 ]  [ -5 ]
```

---

## 🧩 Exercice 3 – Formulaire d’affichage en temps réel

**Objectif :**
Créer un petit formulaire React qui affiche en direct le prénom et le nom saisis par l’utilisateur.

**Consignes :**

1. Crée un composant `Exercice3`.
2. Utilise deux états (`useState`) :

   * `firstname` pour le prénom
   * `lastname` pour le nom
3. Utilise le hook `useId()` pour générer des identifiants uniques et les associer aux champs du formulaire via les attributs `id` et `htmlFor`.
4. À chaque frappe dans un champ, mets à jour la valeur correspondante grâce à l’événement `onChange`.
5. Affiche le prénom et le nom ensemble sous le formulaire, mis à jour en temps réel.
6. Ajoute un lien pour revenir à la page d’accueil avec `react-router-dom`.

**Exemple de rendu attendu :**

```
Prénom : [ Sam ]
Nom : [ Nguyen ]

Sam Nguyen
```

Parfait 😎
Voici **l’énoncé de l’exercice 4** :

---

## 🧩 **Exercice 4 — Liste dynamique : ajout, vérification et suppression d’éléments**

**Objectif :**
Créer une petite application React permettant de gérer une liste dynamique.
L’utilisateur doit pouvoir **ajouter** des éléments à la liste, **empêcher les doublons**, **refuser les entrées vides**, et **supprimer** un élément spécifique.

---

### 🔧 **Consignes :**

1. Crée un composant `Exercice4`.
2. Initialise deux états avec `useState` :

   * `list` (un tableau vide au départ) pour stocker les éléments ajoutés.
   * `valeur` (une chaîne vide) pour stocker le texte saisi dans le champ.
3. Affiche :

   * Un **champ texte** pour saisir un nouvel élément.
   * Un **bouton "Ajouter"** pour valider l’ajout.
4. Quand l’utilisateur clique sur “Ajouter” :

   * Si le champ est vide → afficher une **alerte** :

     > "ATTENTION : Le champ ne doit pas être vide !"
   * Si l’élément (insensible à la casse) existe déjà dans la liste → afficher :

     > "ATTENTION : cet élément se trouve déjà dans la liste !"
   * Sinon → **ajouter l’élément à la liste**.
5. Affiche la liste sous forme de `<ul>` contenant des `<li>`.
   Chaque élément doit être accompagné d’un **bouton “Supprimer”** permettant de le retirer de la liste.
6. Ajoute un **lien de retour** (`<Link to="/" />`) pour revenir à la page principale.

---

### 💡 **Exemple attendu :**

```
[ champ texte ] [ Ajouter ]

Liste :
- Pomme   [Supprimer]
- Poire   [Supprimer]
```

Si on saisit “poire” à nouveau →
➡️ Alerte : “ATTENTION : cet élément se trouve déjà dans la liste !”
Si on clique sur “Supprimer” → l’élément disparaît.

---

Souhaites-tu que je te propose l’énoncé du prochain exercice (n°5) dans la continuité de celui-ci ?
