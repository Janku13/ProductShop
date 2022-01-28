import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Products } from "./components/products_components/products";
import { AddProduct } from "./components/add_component/add_product";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/add" element={<AddProduct />} />
        </Routes>
      </div>
    );
  }
}

export default App;
