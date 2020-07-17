const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/test01", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB db..."))
  .catch(err => console.error("Could not connect to MongoDB..."));

 module.exports = (req, res, next) => {
 	req.mongoose = mongoose;
 	next();
 }