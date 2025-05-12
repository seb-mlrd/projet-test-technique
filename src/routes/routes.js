const express = require('express');
const router = express.Router();
const User = require('../models/user');

// route pour créer un utilisateur
router.post('/users', async (req, res) => {
    const { name, email, age, password } = req.body;
    try {
        const user = new User({ name, email, age, password });
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send({ message: 'Erreur lors de la création de l\'utilisateur' });
    }
})

// route pour supprimer un utilisateur
router.delete('/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const deleteUser = await User.findByIdAndDelete(userId);
        if (!deleteUser) {
            return res.status(404).send({ message: 'Utilisateur non trouvé' });
        }
        res.status(200).send({ message: 'Utilisateur supprimé avec succès' });
    }catch (error) {
        res.status(500).send({ message: 'Erreur lors de la suppression de l\'utilisateur' });
    }
});

// route pour lister tous les utilisateurs
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    }catch (error) {
        res.status(500).send(err)
    }
});

module.exports = router;