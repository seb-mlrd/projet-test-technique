# projet-test-technique
# projet créer par Noussaiba Dahou, Amina Ghoula, Jean-david Zamblezie, Noah Mathey et Sébastien Maillard

Nous aurons 3 fonctionnalités :
Pouvoir ajouter un utilisateur à la base de donnée mongodb via un formulaire , pouvoir supprimer un utilisateur, et pouvoir lister tout les utilisateurs

Pour l'installation du projet:

# Installer node:
    npm init -y

# installer les dépendances nécéssaire au projet:
    npm install --save-dev jest supertest cypress sqlite3 knex

si problème sur mac mettre un sudo devant la commande

# installer mongoose pour la base de donnée
    mpn i mongoose

# installer cors pour les problême de cors avec l'api
    npm install cors

dans le package.json mettre ceci à la place du script existant:
  "scripts": {
    "start": "node src/server.js",
    "test:unit": "jest --watchAll",
    "test:init": "jest --config jest.integration.config.js",
    "test:e2e": "cypress open"
  },

# Les différentes commandes pour lancer les test sont:

    npm test:unit

    npm test:init

    npm test:e2e


## Exemples concrets d’utilisation des API

### 1. Ajouter un utilisateur

**Requête :**
```http
POST /users
Content-Type: application/json

{
  "name": "Jean Dupont",
  "email": "jean.dupont@email.com",
  "age": 30,
  "password": "motdepasse"
}