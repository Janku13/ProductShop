const express = require("express");
const app = express();
const cors = require("cors");
const productRouter = require("./routes/product/products.router");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", productRouter);

module.exports = app;
