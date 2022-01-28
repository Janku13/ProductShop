import React, { Component } from "react";
import { Header } from "./header/product.header";
import { ProductsList } from "./products/products.list";
import {httpDeleteProduct, httpGetProducts} from "../request"



export class Products extends Component {
    constructor() {
      super();
      this.state = {
        Products: [],
        searchField:'',
        itemChecked:{},
        deleteList: [],
      };
    }
    checkedBox = (id, e) => {
      let itemChecked = this.state.itemChecked;
      itemChecked[id] = e.target.checked; //passes true of false
     this.setState({ itemChecked },(()=>console.log(itemChecked)));

    };
    deleteProduct = async () => {
      let itemChecked = this.state.itemChecked;
      const items = Object.entries(itemChecked);
      const { deleteList } = this.state;
      const deletedId = []

      for (let item of items) {
        if (item[1] === true) {
          deleteList.push(item);
          deletedId.push(item[0])
        }
      }
   
      await httpDeleteProduct(this.state.deleteList).then((res)=>{
       
      })
      const newProducts = []
      this.state.Products.filter((el)=>{
        if(!deletedId.includes(el.SKU)){
          newProducts.push(el)
        }
      })

      this.setState({
        Products: newProducts
      })
    };
    
     async componentDidMount() {
       await httpGetProducts().then((res) => {
        this.setState({ Products: res});
      });
    }
 
    render() {
      const filteredProducts = this.state.Products.filter((product)=>{
        return product.name.toLowerCase().includes(this.state.searchField.toLowerCase())    
      })
      return (
        <div className="App container">
          <Header  itemChecked={this.state.itemChecked}  deleteProduct={this.deleteProduct}  searchChange={(e) => this.setState({ searchField: e.target.value })} />
          <div className="product-list" >
          <ProductsList
                 products = {filteredProducts} 
                 isChecked={this.checkedBox}/>
          </div>
        </div>
      );
    }
  }
  