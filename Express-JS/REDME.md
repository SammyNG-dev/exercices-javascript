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