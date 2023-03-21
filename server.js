const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser')

const routerEtudiant = require('./routes/etudiant.route')

// Configuration de l'application Express
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Connexion à la base de données MongoDB
// mongoose.connect(
//   'mongodb://localhost:27017/projetUML', 
//   { useNewUrlParser: true, useUnifiedTopology: true }
// )
mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
  console.log('Connexion à MongoDB réussie');
})
.catch((err) => {
  console.error('Erreur de connexion à MongoDB:', err);
});

// Définition des routes de l'application Express

app.use('/', routerEtudiant)

// Lancement du serveur Express
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
