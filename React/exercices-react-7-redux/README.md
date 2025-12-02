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