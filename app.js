const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.static('public'));

// Connexion à MongoDB local
mongoose.connect('mongodb://localhost:27017/projet-test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Connexion à MongoDB réussie'))
.catch((err) => console.error('❌ Échec de connexion MongoDB :', err));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
