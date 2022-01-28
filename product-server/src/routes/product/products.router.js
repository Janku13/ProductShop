const express = require("express");
const {
  httpGetAllProducts,
  httpAddNewProduct,
  httpDeleteProduct,
} = require("./products.controller");

const productRouter = express.Router();

productRouter.get("/", httpGetAllProducts);
productRouter.post("/", httpAddNewProduct);
productRouter.delete("/", httpDeleteProduct);

module.exports = productRouter;
