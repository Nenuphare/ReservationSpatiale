const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model.js")(mongoose);
db.destination = require("./destination.model.js")(mongoose);
db.reservation = require("./reservation.model.js")(mongoose);

module.exports = db;