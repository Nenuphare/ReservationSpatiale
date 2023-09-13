module.exports = app => {

    var express = require("express");
    const destination = require("../controllers/destination.controller.js");
    var router = express.Router();

    //Create a new etape
    router.post("/", destination.create);
    //Find all etape
    router.get("/", destination.findAll);

    app.use("/api/destination", router);
}