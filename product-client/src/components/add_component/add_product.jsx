import React, { Component }  from "react";
import { AddHeader } from "./add-header/product.header";
import { AddForm } from "./add-form/adding-form";
import { httpAddProduct } from "../request";
import { Navigate} from 'react-router-dom'



export class AddProduct extends Component {

    constructor() {
      super();
      this.state = {
        selectValue:'',
        formData:{},
        formId:"product_form",
        didSubmit:"false"
      };
    }
    
    handleDropdownChange = (e) => {

      this.setState({ selectValue: e.target.value })
 
    }

    handleSubmit = async (event) =>{
     
      event.preventDefault();
      const targets = event.target
     
      const data = this.state.formData
      for (let target of targets){
        if(target.name === ''){
          console.log(target.name)
        }else{
    
          data[target.name] = target.value
        }
      
      }
      
      console.log('first',this.state.formData)
      await httpAddProduct (this.state.formData)
      this.setState({
        didSubmit:true
      })

    }; 
  

 
    render() {
      if(this.state.didSubmit === true){
        return <Navigate to='/'/>
      }
   
      return (
        <div >
         <AddHeader formId = {this.state.formId} />
         <AddForm formId = {this.state.formId} handleSubmit={this.handleSubmit} handleDropdownChange={this.handleDropdownChange} selectValue={this.state.selectValue}/>

        </div>
      );
    }
    
   
 
  
      
  }
  