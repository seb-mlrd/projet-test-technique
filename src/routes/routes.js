const express = require('express');
const app = express();

// route pour créer un utilisateur
app.post('/users', (req, res) => {
    res.status(201).send('Utilisateur créé');
})

// route pour supprimer un utilisateur
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).send(`Utilisateur avec l'ID ${userId} supprimé`);
});

// route pour lister tous les utilisateurs
app.get('/users', (req, res) => {
    res.status(200).send('Liste de tous les utilisateurs');
});