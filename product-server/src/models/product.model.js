const productDB = require("./product.mongo");

async function existsProduct(productSKU) {
  const listofProductToDelete = await productDB
    .find()
    .where("SKU")
    .in(productSKU);

  return listofProductToDelete;
}

async function deleteProduct(products) {
  console.log(products);

  const data = await productDB.deleteMany({
    SKU: {
      $in: products,
    },
  });
  console.log(data);
}

async function getProduct() {
  return await productDB.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function addProduct(product) {
  await productDB.findOneAndUpdate(
    {
      SKU: product.SKU,
    },
    product,
    {
      upsert: true,
    }
  );
}

module.exports = {
  addProduct,
  getProduct,
  existsProduct,
  deleteProduct,
};
