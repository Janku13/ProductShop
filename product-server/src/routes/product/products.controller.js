const {
  addProduct,
  getProduct,
  existsProduct,
  deleteProduct,
} = require("../../models/product.model");

async function httpGetAllProducts(req, res) {
  return res.status(200).json(await getProduct());
}

async function httpAddNewProduct(req, res) {
  const product = req.body;
  if (!product.SKU || !product.name || !product.price || !product.dropList) {
    return res.status(400).json({
      error: "Missing required data",
    });
  }
  await addProduct(product);
  return res.status(201).json(product);
}

async function httpDeleteProduct(req, res) {
  const deleteId = req.body;
  const listOfDeleteSKU = [];
  deleteId.map((product) => {
    listOfDeleteSKU.push(product[0]);
  });

  const existsLaunchWithSKU = await existsProduct(listOfDeleteSKU);
  if (!existsLaunchWithSKU) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }
  const deleted = await deleteProduct(listOfDeleteSKU);
  if (!deleted) {
    return res.status(400).json({
      error: "Did not delete",
    });
  }
  return res.status(200).json({
    ok: true,
  });
}

module.exports = {
  httpGetAllProducts,
  httpAddNewProduct,
  httpDeleteProduct,
};
