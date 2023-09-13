

module.exports = app => {

    var express = require("express");
    const user = require("../controllers/user.controller.js");
    var router = express.Router();

    //Create a new etape
    router.post("/", user.create);
    //Find all etape
    router.get("/", user.findAll);

    app.use("/api/user", router);
}