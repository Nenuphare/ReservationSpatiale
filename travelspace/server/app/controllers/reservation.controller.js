const db = require("../models");
//const {useRoute} = require("vue-router");
const Reservation = db.reservation;
const bodyParser = require("body-parser");

// Création et sauvegarde d'un article
exports.create = (req, res) => {

    //Création de l'article
   let reservation = Reservation({
        _id: req?.body?._id,
        name: req?.body?.name,
        firstname: req?.body?.firstname,
        email: req?.body?.email,
        telephone: req?.body?.telephone,
        programme: req?.body?.programme,
        date: req?.body?.date,
        
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
    const Nom = req.query.name;
    let condition = Nom ? {
        name: {
            $regex: new RegExp(Nom),
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