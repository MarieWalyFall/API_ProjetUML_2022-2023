const express = require('express')
const routerEtudiant = express.Router()
const etudiantController = require('../controllers/etudiant.controller')
const authentificationController = require('../controllers/authentification.controller')

routerEtudiant.post('/add', etudiantController.addEtudiant)
routerEtudiant.get('/etudiant/:id', etudiantController.getEtudiant)
routerEtudiant.put('/etudiant/:id', etudiantController.updateMonths)
routerEtudiant.post('/auth', authentificationController.authEtudiant)

module.exports = routerEtudiant