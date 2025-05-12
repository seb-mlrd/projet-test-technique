const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('../models/user');

mongoose.connect('mongodb://localhost:27017/node_mongo',{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() => {
    console.log('connexion à la base de données réussie');
})
.catch((err) => {
  console.log('connexion à la base de données échouée');
})

// route pour créer un utilisateur
app.post('/users', async (req, res) => {
        const { name, email, age } = req.body;
    try {
        const user = new User({ name, email, age });
        await user.save();
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(err)
    }
})

// route pour supprimer un utilisateur
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).send(`Utilisateur avec l'ID ${userId} supprimé`);
});

// route pour lister tous les utilisateurs
app.get('/users', async (req, res) => {
        try {
        const users = await User.find();
        res.send(users);
    }catch (error) {
        res.status(500).send(err)
    }
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});