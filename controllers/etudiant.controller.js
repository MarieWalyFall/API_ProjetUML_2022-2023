const EtudiantModel = require('../models/etudiant.model')

/**
 * @description Ajouter un étudiant.
 * @body tous les attributs
 */
module.exports.addEtudiant = async(req, res) => {
    try {
        const newEtudiant = new EtudiantModel ({
            id: req.body.id,
            nom: req.body.nom,
            prenom: req.body.prenom,
            mail: req.body.mail,
            password: req.body.password,
            anneeAcademique: '2022/2023',
            classe: req.body.classe,
            departement: req.body.departement,
            formation: req.body.formation,
            montant: req.body.montant,
            mois:{
                janvier: req.body.janvier,
                fevrier: req.body.fevrier,
                mars: req.body.mars,
                avril: req.body.avril,
                mai: req.body.mai,
                juin: req.body.juin,
                octobre: req.body.octobre,
                novembre: req.body.novembre,
                decembre: req.body.decembre    
            }
    })
        const saveEtudiant = await newEtudiant.save()
        res.status(200).json(saveEtudiant)
    } catch (error) {
        res.status(500).json({ message: error })
        console.log(error)
    }
}


/**
 * @description Récupérer tous les mois pour un étudiant donné afin de voir quels mois il a payé ou pas. Renvoie un objet avec toutes les informations de l'étudiant.
 * @param id 
 */
module.exports.getEtudiant = async(req, res) => {
    try {
        const etudiantMois = await EtudiantModel.findOne({id: req.params.id})
        if (etudiantMois) {
          res.status(200).json(etudiantMois)          
        }
        res.status(404).json("Cet étudiant n'existe pas !")
    } catch (error) {
      res.status(500).json({ message: error })
      console.log(error)
    }
}


/**
 * @description Modifier les attributs de mois en les mettant à true lorsque l'étudiant a payé et false pour le cas contraire.
 * @param id
 * @body mois.*
 */
module.exports.updateMonths = async (req, res) => {
  try {
    const etudiant = await EtudiantModel.findOne({id: req.params.id})
    if (etudiant) {
      const updateMonths = await EtudiantModel.findOneAndUpdate(
        { id: req.params.id },
        {
          $set: {
            'mois.janvier': req.body.janvier,
            'mois.fevrier': req.body.fevrier,
            'mois.mars': req.body.mars,
            'mois.avril': req.body.avril,
            'mois.mai': req.body.mai,
            'mois.juin': req.body.juin,
            'mois.juillet': req.body.juillet,
            'mois.aout': req.body.aout,
            'mois.septembre': req.body.septembre,
            'mois.octobre': req.body.octobre,
            'mois.novembre': req.body.novembre,
            'mois.decembre': req.body.decembre,
          },
        },
        { new: true }
      )
      res.status(200).json(updateMonths)      
    }
    res.status(404).json("Cet étudiant n'existe pas !")
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
  
/**
 * @description Supprimer les etudiants présents dans la base de donnée
 * @param id
 */
module.exports.deleteEtudiant = async (req, res) => {
  try {
    const etudiant = await EtudiantModel.findOne({id: req.params.id})
    if(etudiant){
      const etudiantDelete = await EtudiantModel.findOneAndDelete({id: req.params.id})
      res.status(200).json(etudiantDelete)
    }
    res.status(404).json("Cet étudiant n'existe pas !")
  } catch (error) {
    res.status(500).json({ message: error })
  }
}