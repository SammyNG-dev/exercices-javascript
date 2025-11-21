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