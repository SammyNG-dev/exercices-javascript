Voici une version propre de la consigne pour l’exercice 1 sur les **props** :

---

## ⚛️ Exercice 1 — Utilisation des props

### 🎯 Objectif :

Comprendre comment un **composant enfant** peut recevoir des données depuis un **composant parent** via les props.

---

### 🧩 Consignes :

1. Crée deux composants : **`Exercice1Parent`** et **`Exercice1Enfant`**.
2. Dans le **parent**, définis trois variables :

   * `nom` (string)
   * `age` (number)
   * `ville` (string)
3. Passe ces valeurs au composant **enfant** via les props.
4. Dans le **composant enfant**, récupère les props et affiche un message :

   ```
   Bonjour, je m'appelle {nom}, j'ai {age} ans et j'habite à {ville}.
   ```
5. Ajoute un lien pour revenir à la page d’accueil si nécessaire (`Link` de `react-router-dom`).

---

💡 **Indice :**
Tu peux utiliser la **destructuration des props** pour accéder directement aux valeurs dans l’enfant :

```js
function Exercice1Enfant({ nom, age, ville }) { ... }
```

---

# ⚛️ Exercice 2 — Props dynamiques avec une liste

### 🎯 Objectif :

Apprendre à passer des **données dynamiques** d’un composant parent à un composant enfant et les afficher.

---

### 🧩 Consignes :

1. Crée deux composants : un **parent** et un **enfant**.
2. Dans le **parent**, définis un **tableau d’objets** représentant plusieurs utilisateurs (nom, âge…).
3. Passe ce tableau à l’enfant via les **props**.
4. Dans l’enfant, parcours ce tableau et affiche chaque utilisateur dans un élément `<p>` ou `<li>`.
5. Assure-toi que chaque élément a une **clé unique**.

---

💡 Petit défi : ne pas afficher le tableau directement, mais **générer les éléments dynamiquement** en utilisant `map()`.

---

# 🔥 **Exercice 3 – Faire remonter une action (callback props)**

Tu vas travailler sur un parent qui possède un état, et un enfant qui doit **modifier cet état**…
mais **indirectement**, grâce à une **fonction envoyée en prop**.

### 🎯 Objectif :

Comprendre comment l’enfant peut **déclencher un changement** dans le parent grâce à un **callback**.

---

### ✅ **Consigne :**

1. Dans le **parent**, crée un state `message` avec une valeur par défaut (par ex. `"Aucun message"`).

2. Dans le parent, crée une fonction `changerMessage()` qui met à jour ce state avec un nouveau message (par ex. `"Message reçu depuis l’enfant"`).

3. Passe cette fonction **comme prop** à ton composant enfant.

4. Dans l’enfant :

   * affiche un bouton
   * lorsque ce bouton est cliqué, appelle la fonction envoyée par le parent.

5. Dans le **parent**, affiche le message mis à jour au-dessus ou en-dessous du composant enfant.

---

### 🎉 Résultat attendu :

* Au départ, le parent affiche :
  **"Aucun message"**
* Tu cliques sur un bouton dans l’enfant →
  Le parent met à jour son state →
  Le parent affiche :
  **"Message reçu depuis l’enfant"**

---

# 🧪 **Exercice 4 — Interaction Parent/Enfant + Mise à jour d’un état complexe**

Tu disposes d’un composant **Parent** qui contient une liste de produits :

```js
[
  { id: 1, nom: "Chaise", prix: 49 },
  { id: 2, nom: "Table", prix: 129 },
  { id: 3, nom: "Lampe", prix: 35 },
  { id: 4, nom: "Canapé", prix: 499 },
  { id: 5, nom: "Tapis", prix: 89 },
]
```

### 🎯 **Objectif**

1. Le Parent doit afficher chaque produit avec son prix.
2. Pour chaque produit, le Parent rend un composant **Enfant**.
3. Le composant Enfant contient un bouton **"Augmenter le prix"**.
4. Quand on clique sur ce bouton, le Parent doit augmenter de **10 €** le prix du produit correspondant.
5. L'état (`useState`) doit rester **immuable** :
   👉 tu dois créer une **nouvelle liste** (pas modifier celle existante).

### ✏️ **Contraintes**

* L'enfant ne connaît pas la liste complète, seulement le nom du produit et une callback.
* Le Parent doit mettre à jour `productsList` en remplaçant uniquement l’élément correspondant.
* L'enfant doit rester totalement "bête" : il se contente d'appeler la callback quand on clique.

### 🧩 **Compétences travaillées**

* Mise à jour immuable d’un array d’objets dans React.
* Passage de fonction Parent → Enfant.
* Manipulation de `map()` pour produire un nouvel état.

---

# **Exercice 5 — Boutons enfants contrôlant un state parent**

Crée un composant parent qui contient un compteur (`count`) et trois fonctions :

* une fonction pour **incrémenter** le compteur,
* une fonction pour **décrémenter** le compteur,
* une fonction pour **réinitialiser** le compteur à 0.

Le composant parent doit afficher la valeur actuelle du compteur, puis trois **composants enfants**.
Chaque enfant doit être un **bouton réutilisable** qui reçoit :

* un **callback** à exécuter (`cbk`)
* du **texte** à afficher (via `children`)

L’enfant doit simplement rendre un bouton et appeler la fonction reçue lorsqu’on clique dessus.

Le résultat attendu :

* un bouton `+1` qui augmente le compteur
* un bouton `-1` qui le diminue
* un bouton `Reset` qui le remet à zéro

Tu dois donc utiliser les props pour permettre aux enfants d’agir sur le state du parent.

---

# 📝 **Exercice 6 – Faire remonter une valeur dans un prop (one-way binding React)**

## 🎯 **Objectif**

Créer un composant parent avec un champ texte, et afficher dynamiquement son contenu dans un composant enfant *via un prop*.

## 📌 **Consigne**

1. Dans le composant **parent**, crée un `input`.
2. À chaque frappe, stocke la valeur de l’input dans un state (`useState`).
3. Passe cette valeur au composant enfant via un prop.
4. Le composant **enfant** doit simplement afficher cette valeur dans un `<h1>`.

## 🧪 **Résultat attendu**

Quand l’utilisateur tape dans l’input du parent, le texte apparaît en direct dans l’enfant.

---

# 📝 **Exercice 7 – Choisir un élément via un composant enfant**

Tu vas créer un composant parent qui affiche une liste de fruits, et un composant enfant qui permet de sélectionner l’un de ces fruits.

### 🎯 **Objectif**

* Le **parent** possède une liste de fruits et un état qui contient le fruit sélectionné.
* Chaque fruit est affiché avec un bouton.
* Quand on clique sur un bouton (dans l’enfant), le parent met à jour le fruit sélectionné.
* Le fruit choisi doit s’afficher en bas de la page.

### 🛠️ **Contraintes**

1. Le **parent** transmet à l’enfant :

   * Le texte du bouton (le nom du fruit)
   * Une **fonction callback** qui met à jour l’état `nomFruit`
2. L’**enfant** ne fait qu’une seule chose :

   * Appeler la fonction envoyée par le parent lorsqu’on clique sur le bouton
3. Le parent affiche :
   **"Tu as choisi : {nomFruit}"**

---

# ✅ **Exercice 8 — Mettre à jour un objet passé dans le state**

### **Objectif :**

Apprendre à mettre à jour correctement une propriété d’un objet stocké dans un state React, tout en respectant l’immuabilité.

---

## **Consigne**

Tu disposes, dans le composant **Parent**, d’un objet `profil` contenant :

* un `nom`,
* un `age`,
* une `ville`.

Cet objet est stocké dans un state React.

Tu dois maintenant :

### **1. Afficher dans le parent :**

* le nom
* l’âge
* la ville actuelle du profil

### **2. Afficher dans le parent une liste de boutons**, chacun contenant le nom d’une ville (ex : "Paris", "Marseille", "Bordeaux", etc.).

### **3. Quand on clique sur un de ces boutons (enfant) :**

* l’enfant doit appeler une fonction du parent via une prop callback
* cette fonction doit **mettre à jour seulement la propriété `ville`** dans l’objet du state
* sans modifier les autres propriétés (nom, âge)
* en respectant l’immuabilité (`{ ...prev, ville: nouvelleVille }`)

### **4. Le composant enfant doit être un simple bouton**, qui reçoit :

* `children` = nom de la ville
* `cbk` = fonction à exécuter lors du clic

---

## **Résultat attendu**

Lorsque tu cliques sur une ville, l’affichage du profil doit se mettre à jour en temps réel, en changeant uniquement la ville.

---

# Exercice 9 – Formulaire contrôlé et affichage des données via props

**Objectif :**
Créer un formulaire dans un composant parent qui permet de saisir le nom, l’âge et la ville d’un profil, et transmettre ces informations à un composant enfant pour les afficher.

**Instructions :**

1. Dans le **composant parent** :

   * Définis un state `profil` avec les propriétés `nom`, `age` et `ville`, initialisées à des chaînes vides.
   * Crée trois inputs contrôlés pour permettre de modifier chacune des propriétés du profil.
   * Utilise `useId` pour associer correctement chaque `label` à son input (`htmlFor` / `id`).
   * Passe l’objet `profil` au composant enfant via les props.

2. Dans le **composant enfant** :

   * Reçois l’objet `profil` via les props.
   * Affiche les informations dans trois `<h1>` distincts : Nom, Âge et Ville.

**Exemple attendu :**

* Si l’utilisateur saisit `"Alice"`, `"25"`, `"Paris"` dans le parent, l’enfant affiche :

```
Nom : Alice
Age : 25
Ville : Paris
```

**Conseil :**
Assure-toi que les modifications dans les inputs mettent à jour uniquement la propriété correspondante dans le state du parent, sans écraser les autres.

---