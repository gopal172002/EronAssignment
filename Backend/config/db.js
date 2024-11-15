const mongoose = require("mongoose");
require("dotenv").config();

console.log("Mongo URI: " + process.env.mongourl);

const connection = mongoose.connect(process.env.mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
