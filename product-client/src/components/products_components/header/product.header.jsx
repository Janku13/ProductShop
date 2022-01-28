import React from "react";
import { Link } from "react-router-dom";
import { SearchBox } from "../search-box/search-box.components";
import "./header.style.css"


export const Header = ({searchChange,deleteProduct, itemChecked})=>{
    const items = Object.entries(itemChecked);
    const numberOfChecked = []
     items.map((item)=>{
        if (item[1]===true){
            numberOfChecked.push(item)
        }
    })
    const deleteButtonText = numberOfChecked.length ===0 ? "Choose a Product " :
                                         `Delete Product${numberOfChecked.length>1 ? "s":""}`

    return <header className="header ">
            <h1 className="display-1">Product List</h1>  
            <nav className="navbar-nav">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <SearchBox className="navbar-brand ms-auto"searchChange={searchChange}/>
                    <Link className="d-grid gap-2 d-md-flex justify-content-md-end" to ='/add'> 
                        <button className="btn btn-primary" id="add-product-btn" >Add Product</button>
                    </Link>
                    <button onClick={deleteProduct } id="delete-product-btn" className="btn btn-danger">{deleteButtonText }</button>
                    
                </div>
               
            
            </nav> 
            <hr />
     
          </header>
}