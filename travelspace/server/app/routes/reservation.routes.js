module.exports = app => {

    var express = require("express");
    const reservation = require("../controllers/reservation.controller.js");
    var router = express.Router();

    //Create a new etape
    router.post("/", reservation.create);
    //Find all etape
    router.get("/", reservation.findAll);

    app.use("/api/reservation", router);
}