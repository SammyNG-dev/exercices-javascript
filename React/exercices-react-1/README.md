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

### 🧩 Exercice 3 – Formulaire d’affichage en temps réel

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

### 🧩 **Exercice 4 — Liste dynamique : ajouter et supprimer des éléments**

Crée un composant React qui permet à l’utilisateur :

1. **D’ajouter** des éléments dans une liste à partir d’un champ texte.
2. **D’afficher** la liste mise à jour en temps réel.
3. **De supprimer** un élément en cliquant sur un bouton à côté de celui-ci.

#### 🧠 Objectifs pédagogiques :

* Utiliser un `useState` contenant un tableau.
* Manipuler ce tableau avec les méthodes modernes (`...spread`, `filter`, etc.).
* Comprendre la mise à jour d’état en React.

#### 🧰 Indications :

* Commence avec un `useState([])` pour la liste.
* Quand l’utilisateur saisit un texte et clique sur "Ajouter", tu ajoutes cet élément au tableau.
* Chaque élément de la liste s’affiche avec un bouton “❌ Supprimer”.
* Quand on clique sur “Supprimer”, l’élément est retiré du tableau.

#### 💡 Exemple attendu :

```
📝 Entrez un élément : [_____] [Ajouter]

Liste :
- Pain [❌]
- Lait [❌]
- Fromage [❌]
```
