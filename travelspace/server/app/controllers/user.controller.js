const db = require("../models");
//const {useRoute} = require("vue-router");
const User = db.user;
const bodyParser = require("body-parser");

// Création et sauvegarde d'un article
exports.create = (req, res) => {

    //Création de l'article
   const user = new User({
        code: req?.body?.code
    })

    //Sauvegarde de l'article dans la base
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating destinations."
            });
        });
};

// Accès à toutes les detinations dans la base
exports.findAll = (req, res) => {
    const code = req.query.code;
    let condition = code ? {
        nom: {
            $regex: new RegExp(code),
            $options: "i"
        }
    } : {};
    User.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Article."
            });
        });
};