const db = require("mongoose");

const productSchema = new db.Schema({
  SKU: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  dropList: {
    type: String,
    lowercase: true,
  },
  size: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  height: {
    type: Number,
  },
  len: {
    type: Number,
  },
  width: {
    type: Number,
  },
});

module.exports = db.model("Product", productSchema);
