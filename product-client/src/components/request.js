const API_URL = "http://localhost:8000";

async function httpGetProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);
    return await response.json();
  } catch (err) {
    return {
      error: "Could not get products",
    };
  }
}

async function httpAddProduct(product) {
  try {
    return await fetch(`${API_URL}/products`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  } catch (err) {
    return { ok: false };
  }
}

async function httpDeleteProduct(products) {
  try {
    return await fetch(`${API_URL}/products`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    });
  } catch (err) {
    return {
      ok: false,
    };
  }
}
export { httpAddProduct, httpDeleteProduct, httpGetProducts };
