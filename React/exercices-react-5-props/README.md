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

## ⚛️ Exercice 2 — Props dynamiques avec une liste

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