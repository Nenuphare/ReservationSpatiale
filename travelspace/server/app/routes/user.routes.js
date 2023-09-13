

module.exports = app => {

    var express = require("express");
    const user = require("../controllers/user.controller.js");
    var router = express.Router();

    //Create a new etape
    router.post("/user", user.create);
    //Find all etape
    router.get("/user", user.findAll);

    app.use("/api", router);
}