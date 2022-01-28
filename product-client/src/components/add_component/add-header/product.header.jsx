import React from "react";
import { Link } from "react-router-dom";

import "./header.style.css"


export const AddHeader = ({formId,handleSubmit})=>{
    return <header className="header ">
            <h1 className="display-1">Product Add</h1>  
            <nav className="navbar-nav">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
               
                    <button className="btn btn-primary" id= "add-product-btn"  type='submit' form={formId} >Save</button>        
                    <Link className="d-grid gap-2 d-md-flex justify-content-md-end" to ='/'> 
                    <button  className="btn btn-primary ">Cancel</button>
                    </Link>
  
                </div>
            
            </nav> 
            <hr />

          </header>
}