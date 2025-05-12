# projet-test-technique
# projet créer par Noussaiba Dahou, Amina Ghoula, Jean-david Zamblezie, Noah Mathey et Sébastien Maillard

Nous aurons 3 fonctionnalités :
Pouvoir ajouter un utilisateur, pouvoir supprimer un utilisateur, et pouvoir lister tout les utilisateurs

Installer node:

npm init -y

installer les dépendances nécéssaire au projet:

npm install --save-dev jest supertest cypress sqlite3 knex

si problème sur mac mettre un sudo devant la commande

dans le package.json mettre ceci à la place du script existant:
  "scripts": {
    "start": "node src/server.js",
    "test:unit": "jest --watchAll",
    "test:init": "jest --config jest.integration.config.js",
    "test:e2e": "cypress open"
  },
