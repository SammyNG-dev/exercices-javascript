# **Exercice 1 : Créer ton premier serveur Express**

### **Objectif**

Prendre en main Express en créant un serveur minimal et en définissant tes premières routes GET.

### **Consignes**

1. **Changer le port**

   * Modifie le serveur pour qu’il écoute sur le port **5000** au lieu de 3000.
   * Vérifie que le serveur répond sur `http://localhost:5000`.

2. **Ajouter une nouvelle route**

   * Crée une route **GET** `/hello` qui renvoie le texte :

     ```
     Hello World !
     ```
   * Teste-la dans ton navigateur ou avec Postman.

3. **Personnaliser la route principale**

   * Modifie la route `/` pour qu’elle renvoie un message personnalisé incluant ton prénom.
   * Exemple : `"Bonjour Sammy !"`

### **Ce que tu apprends**

* Démarrer un serveur Express.
* Créer des routes GET simples.
* Tester les réponses dans un navigateur ou un client HTTP.

---

# **Exercice 2 : Routes GET et POST avec JSON**

### **Objectif**

Apprendre à envoyer et recevoir des données au format JSON avec Express en utilisant des routes GET et POST.

---

### **Consignes**

1. **Route GET avec JSON**

   * Crée une route **GET** `/user`.
   * Cette route doit renvoyer un objet JSON contenant :

     * ton prénom
     * ton âge
     * un hobby
   * Exemple de structure :

     ```json
     {
       "name": "Sammy",
       "age": 36,
       "hobby": "coder"
     }
     ```

2. **Activer la lecture du JSON**

   * Ajoute le middleware `express.json()` pour permettre à Express de lire les données envoyées dans le corps des requêtes.

3. **Route POST pour recevoir des données**

   * Crée une route **POST** `/user`.
   * Cette route doit :

     * récupérer les données envoyées dans le corps de la requête (`req.body`)
     * renvoyer une réponse JSON confirmant la réception des données
   * Exemple de réponse attendue :

     ```json
     {
       "message": "Utilisateur reçu",
       "user": { ... }
     }
     ```

4. **Tester les routes**

   * Teste la route GET dans le navigateur.
   * Teste la route POST avec Postman, Insomnia ou `curl`, en envoyant un objet JSON.

---

### **Ce que tu apprends**

* Renvoyer des données JSON avec Express.
* Lire des données envoyées en POST.
* Utiliser `express.json()` comme middleware.
* Comprendre la différence entre GET et POST.

---

# **A partir de l'edxercice 3, il n'y aura plus qu'un seul dossier "Exercices" dans lequel seront tous les exercices qui suivront**

Voici la **consigne de l’Exercice 3**, rédigée proprement et clairement, dans le même style que les précédentes :

---

# **Exercice 3 : Paramètres d’URL et Query Parameters**

### **Objectif**

Apprendre à récupérer des informations envoyées par le client via :

* les **paramètres d’URL**
* les **query parameters**

---

### **Consignes**

1. **Paramètre d’URL**

   * Crée une route **GET** `/user/:id`.
   * Cette route doit :

     * récupérer la valeur `id` depuis l’URL
     * renvoyer une réponse au format JSON contenant cet `id`

   Exemple d’URL :

   ```
   /user/42
   ```

   Exemple de réponse :

   ```json
   {
     "id": "42"
   }
   ```

2. **Query parameters**

   * Crée une route **GET** `/users`.
   * Cette route doit :

     * lire les paramètres `page` et `limit` depuis l’URL
     * renvoyer ces valeurs dans un objet JSON

   Exemple d’URL :

   ```
   /users?page=2&limit=10
   ```

   Exemple de réponse :

   ```json
   {
     "page": "2",
     "limit": "10"
   }
   ```

3. **Tests à effectuer**

   * Teste `/user/1`, `/user/10`, `/user/999`
   * Teste `/users?page=1`
   * Teste `/users?page=1&limit=5`
   * Teste `/users` sans aucun paramètre

---

### **Ce que tu apprends**

* Utiliser `req.params` pour lire les paramètres d’URL.
* Utiliser `req.query` pour lire les query parameters.
* Comprendre la différence entre paramètres obligatoires et optionnels.

---

# **Exercice 4 : Middleware personnalisé**

### **Objectif**

Apprendre à créer un middleware Express pour :

* intercepter toutes les requêtes avant qu’elles atteignent les routes
* exécuter du code commun (par exemple, logging)
* utiliser `next()` pour laisser passer la requête à la route suivante

---

### **Consignes**

1. **Middleware global**

   * Crée un middleware qui s’exécute pour **toutes les requêtes**.
   * Il doit afficher dans la console :

     * la méthode HTTP (`GET`, `POST`, etc.)
     * l’URL appelée
   * Exemple de log attendu :

     ```
     [MIDDLEWARE] GET /middleware/test
     ```

2. **Route de test**

   * Crée une route **GET** `/middleware` qui renvoie un objet JSON :

     ```json
     { "message": "middleware ok" }
     ```

3. **Règles**

   * Le middleware **ne doit jamais envoyer de réponse**
   * Il doit appeler `next()` pour que la route puisse répondre
   * Les autres routes de ton application doivent continuer à fonctionner normalement

---

### **Ce que tu apprends**

* À quoi sert un middleware global
* Comment intercepter et inspecter les requêtes
* La différence entre middleware et route
* L’importance de `next()`

# **Exercice 5 : Gestion des erreurs avec Express**

### **Objectif**

Apprendre à gérer les erreurs dans Express en créant un middleware dédié qui :

* capte les erreurs levées par les routes
* renvoie une réponse JSON cohérente
* permet aux autres routes de continuer à fonctionner

---

### **Consignes**

1. **Créer une route `/error`**

   * Route **GET**
   * Lève une erreur avec un message explicite, par exemple : `"Oups !"`
   * L’erreur doit être transmise au middleware d’erreur automatiquement (via `throw` ou `next(err)`)

2. **Créer un middleware d’erreur**

   * Fonction avec 4 paramètres `(err, req, res, next)`
   * Doit renvoyer une réponse JSON avec :

     ```json
     {
       "status": "error",
       "message": "message de l'erreur"
     }
     ```
   * Code HTTP recommandé : **500**
   * Ce middleware doit être **le dernier middleware défini**, **avant `app.listen()`**

3. **Règles**

   * Ne pas mettre de `throw` dans le middleware d’erreur
   * Toutes les autres routes doivent continuer à fonctionner normalement
   * Pas de validation supplémentaire, juste gérer l’erreur et renvoyer le JSON

---

### **Ce que tu apprends**

* Différence entre un middleware classique et un middleware d’erreur
* Position correcte d’un middleware d’erreur dans Express
* Comment capturer et renvoyer des erreurs en JSON

---

# **Exercice 6 : Organisation du code avec Router et actions**

### **Objectif**

Structurer une application Express de manière propre en :

* séparant les routes du point d’entrée (`index.js`)
* regroupant la logique métier dans des *actions*
* utilisant `express.Router()` pour organiser les routes

---

### **Consignes**

1. **Créer un router Express**

   * Créer un fichier `router.js`
   * Utiliser `express.Router()` (et non `express()`)
   * Toutes les routes de l’application doivent être définies dans ce fichier

2. **Utiliser des actions**

   * Créer un fichier `userActions.js`
   * Définir des fonctions (actions) responsables de la logique métier
   * Les routes du router doivent appeler ces actions

3. **Définir les routes**

   * Créer des routes GET et POST pour les utilisateurs
   * Inclure :

     * des routes avec paramètres d’URL
     * des routes avec query parameters
     * une route de test pour le middleware
     * une route qui déclenche une erreur

4. **Middleware local**

   * Créer un middleware personnalisé
   * L’appliquer uniquement au router avec `router.use()`
   * Vérifier qu’il s’exécute à chaque requête du router

5. **Point d’entrée (`i
Quand tu veux, on enchaîne logiquement avec
👉 **Exercice 7 : Repository et stockage en mémoire (tableau / JSON)**
ndex.js`)**

   * Initialiser Express
   * Activer `express.json()`
   * Brancher le router avec `app.use(router)`
   * Ajouter un middleware d’erreur **après toutes les routes**
   * Démarrer le serveur avec `app.listen()`

---

### **Structure attendue**

```
Exercices/
├── index.js
├── modules/
│   ├── router/
│   │   └── router.js
│   └── user/
│       └── userActions.js
└── package.json
```

---

### **Ce que tu apprends**

* À utiliser `express.Router()` correctement
* À séparer routes, actions et configuration serveur
* À appliquer des middlewares localement à un module
* À comprendre le lien entre méthode HTTP et route
* À structurer un projet Express maintenable

---

# **Exercice 7 : Router dédié pour la ressource `user`**

### Objectif

Organiser les routes liées aux utilisateurs dans un **router dédié**, séparé du fichier `index.js`, et utiliser les **actions que tu as déjà créées** (`getUserById`, `createUser`, `browseUsers`).
Tu devras brancher ce router dans ton application principale.

### Consignes

1. **Créer un fichier `userRouter.js`** (ou `router.js` dans un dossier `user`) pour gérer les routes utilisateurs.
2. Importer les actions depuis `userActions.js`.
3. Créer les routes suivantes dans ce router :

   * `GET /users` → affiche tous les utilisateurs (`browseUsers`)
   * `GET /users/:id` → affiche un utilisateur par ID (`getUserById`)
   * `POST /users` → crée un nouvel utilisateur (`createUser`)
4. Exporter le router et l’importer dans `index.js`.
5. Monter le router dans ton application principale avec `app.use(...)`.
6. Tester toutes les routes avec Postman pour vérifier que :

   * Les statuts HTTP sont corrects (200, 201, 400 ou 404 selon le cas)
   * Les réponses JSON sont cohérentes.

### Bonus (facultatif)

* Ajouter un **préfixe `/api`** pour toutes les routes du router, par exemple `/api/users`.
* Ajouter un **middleware global de logging** qui affiche méthode + URL à chaque requête.

---

Voici une **consigne propre, claire et réaliste** pour l’exercice 8, alignée avec tout ce que tu viens de faire 👇

---

# Exercice 8 : **Persistance des données avec un fichier JSON**

### Objectif

Mettre en place une persistance simple des utilisateurs en stockant les données dans un fichier JSON, afin que les utilisateurs ne soient plus perdus au redémarrage du serveur.

### Contexte

Jusqu’à présent, les utilisateurs étaient stockés en mémoire (dans un tableau JavaScript). Cette solution fonctionne tant que le serveur est lancé, mais toutes les données sont perdues dès qu’il redémarre.

Dans cet exercice, les utilisateurs doivent être lus depuis un fichier `users.json` et chaque modification (création d’un utilisateur) doit être enregistrée dans ce fichier.

### Consignes

1. Créer un fichier `users.json` dans le module `user`, contenant une liste d’utilisateurs (tableau JSON).
2. Modifier le `UserRepository` pour :

   * Lire les utilisateurs depuis le fichier `users.json`.
   * Ajouter un nouvel utilisateur avec un identifiant unique.
   * Sauvegarder les utilisateurs mis à jour dans le fichier JSON après chaque création.
3. L’identifiant (`id`) d’un utilisateur doit :

   * Être un nombre
   * Être unique
   * Continuer à s’incrémenter même si des utilisateurs existent déjà dans le fichier
4. Les méthodes du repository doivent rester responsables uniquement de l’accès aux données :

   * `createUser(name)`
   * `getAllUsers()`
   * `readUserById(id)`
5. Les contrôleurs (`userActions`) ne doivent pas accéder directement au fichier JSON.
6. L’API doit continuer à fonctionner correctement après un redémarrage du serveur.

### Bonus (facultatif)

* Gérer le cas où le fichier `users.json` est vide ou n’existe pas encore.
* Ajouter une gestion d’erreurs en cas de problème de lecture ou d’écriture du fichier.

---

# Exercice 9 : Middleware de validation pour les utilisateurs

**Objectif :**
Ajouter des middlewares pour valider les données des requêtes avant de passer aux actions des contrôleurs.

**Instructions :**

1. Crée deux middlewares dans un fichier `middlewares.js` :

   * `validateCreateUser` :

     * Vérifie que la requête `POST /api/users` contient bien un `name` dans le corps (`req.body`).
     * Si `name` est présent, appelle `next()` pour continuer.
     * Sinon, renvoie une réponse 400 avec `{ message: "Entrez un nom." }`.

   * `validateUserId` :

     * Vérifie que l’`id` passé dans `req.params` pour la route `GET /api/user/:id` est un nombre supérieur à 0.
     * Si valide, appelle `next()`.
     * Sinon, renvoie une réponse 400 avec `{ message: "ID non valide" }`.

2. Applique ces middlewares sur les routes correspondantes dans ton `router.js` :

   ```text
   GET /api/user/:id → validateUserId → getUserById
   POST /api/users → validateCreateUser → createUser
   ```

3. Vérifie avec Postman que :

   * Si les données sont valides, la requête passe et retourne la réponse du controller.
   * Sinon, la requête est arrêtée par le middleware avec le message d’erreur approprié.

**Remarque :**

* Les middlewares doivent appeler `next()` uniquement si les données sont valides.
* Toute erreur inattendue peut être transmise au middleware d’erreur existant avec `next(err)`.

---