const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Définition du schéma pour la collection "etudiants"
const etudiantSchema = new Schema({
  id: { type: Number, required: true, unique: true},
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  dateLieuNaissance:{type: String},
  mail: { type: String, unique: true},
  password: { type: String },
  anneeAcademique: { type: String },
  classe: { type: String },
  departement: { type: String },
  formation: { type: String },
  montant: { type: String },
  exoneration:{type: String},  
  mois: {
    janvier: { type: Boolean, default: false },
    fevrier: { type: Boolean, default: false },
    mars: { type: Boolean, default: false },
    avril: { type: Boolean, default: false },
    mai: { type: Boolean, default: false },
    juin: { type: Boolean, default: false },
    octobre: { type: Boolean, default: false },
    novembre: { type: Boolean, default: false },
    decembre: { type: Boolean, default: false },
  }
});

// Création du modèle "Etudiant" basé sur le schéma "etudiantSchema"
const Etudiant = mongoose.model('Etudiant', etudiantSchema);

module.exports = Etudiant;
