const db = require("../models");
//const {useRoute} = require("vue-router");
const Reservation = db.reservation;
const bodyParser = require("body-parser");

// Création et sauvegarde d'un article
exports.create = (req, res) => {

    //Création de l'article
   const reservation = new Reservation({
        code: req?.body?.code
    })

    //Sauvegarde de l'article dans la base
    reservation
        .save(reservation)
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
    Reservation.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Article."
            });
        });
};