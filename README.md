# Exercices sur JavaScript

Ce dossier a pour but de pratiquer JavaScript avec des exercices sur différents sujets.

---

## Mise en place :

- Cloner le dépôt

SSH :
```
git@github.com:SammyNG-dev/exercices-javascript.git
```

HTTPS :
```
https://github.com/SammyNG-dev/exercices-javascript.git
```

- Naviguer dens le dossier :

```
cd exercices-javascript
```

- Installer les dépendances :

```
npm install
```

## Arborescence du dossier

```
.
├── biome.json
├── Boucles
├── Chaines-de-caractères
├── Conditions
├── Fonctions
├── jest.config.mjs
├── Objets
├── package.json
├── package-lock.json
├── React
│   ├── exercices-react-1-useState
│   ├── exercices-react-2-useEffect
│   ├── exercices-react-3-useRef
│   └── exercices-react-4-animations
├── Tableaux
└── Variables
```

- Pour naviquer entre les dossier (Linux/Bash)

```cd [nom_du_dossier]```

## Pour les dossiers des exercices sur React.JS

La première fois que vous exécutez ```npm install```, cela n'installe pas les dépendances des dossiers avec un projet React. Pour ce faire, naviguez dans le dossier React que vous voulez (exemple ```cd React/exercices-react-3-useRef```) et exécutez ```npm install``` afin d'installer les dépendances.

## Les tests

Ne vous trouvez pas dans un dossier avec un projet React pour lancer les tests.

Autrement, lancez ```npm run test```. Cela lancera les test de quelques fonctions qui sont les fichiers d'exercices dans le dossier ```Fonctions``` de l'exercice 3 à l'exercice 8. (exercice 5 exclu)

## Pour les autres exercices

Naviguez vous dans un dossier (```cd Boucles``` par exemple) puis lancez les fichiers grâce à la commande ```node exo[numéro du fichier].js```