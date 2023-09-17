var mongoose = require("mongoose");
var productSchema = mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  image: String,
  isAvaliable: Boolean,
});

module.exports = mongoose.model("Product", productSchema);
