const EtudiantModel = require('../models/etudiant.model')


/**
 * @description Vérifier si les identifiants entrés sont présents dans la base de donnée.
 * @param {mail password} 
 */
module.exports.authEtudiant = async(req, res) => {
    try {
        const etudiantAuth = await EtudiantModel.findOne({mail: req.body.mail, password: req.body.password})
        if(etudiantAuth){
            res.status(200).json(etudiantAuth);
        } else {
            res.status(404).json("Le mail et/ou le mot de passe incorrect(s)");
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
