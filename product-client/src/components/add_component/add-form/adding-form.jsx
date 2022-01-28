import React from "react";


export const AddForm = ({handleDropdownChange,selectValue,handleSubmit,formId})=>{

    return <form action="" id = {formId} onSubmit={(e)=>{handleSubmit(e)}}>
             <div  className="container">
                <div className="form-group col-md-4 col-md-offset-4 mt-2">
                    <label htmlFor="SKU">SKU</label>
                     <input name = 'SKU'className="form-control" id ='SKU' type="text"placeholder="SKU" />
                </div>
                <div className="form-group col-md-4 col-md-offset-4 mt-2">
                    <label htmlFor="name">Product Name</label>
                    <input name ='name'className="form-control" id ='name' type="text"placeholder="Product Name" />
                 </div>
                 <div className="form-group col-md-4 col-md-offset-4 mt-2">
                    <label   htmlFor="price">Price ($)</label>
                    <input  name ='price'className="form-control" id ='price' min='0' type="number"placeholder="Price ($)" />
                 </div>
                 <div className="form-group col-md-4 col-md-offset-4 mt-3">
                    
                    <select name='dropList' onChange={(e)=> {handleDropdownChange(e)}} className="form-select "  id="productType ">
                        <option ></option>
                        <option value="DVD">DVD</option>
                        <option value="Book">Book</option>
                        <option value="Furniture">Furniture</option>
                    </select>
                    <div>
                        {selectValue === "Book" && <div className="form-group col-md-4 col-md-offset-4  mt-2">
                        <label htmlFor="weight">Weight (KG)</label>
                        <input name='weight' className="form-control" id='weight'type="number" />
                        <small>What is the Weight of the book in kg?</small>
                        </div>}

                        {selectValue === "DVD" && <div className="form-group col-md-4 col-md-offset-4  mt-2">
                                <label htmlFor="size">Size(MB)</label>
                                <input  name = 'size' className="form-control" id='size'type="number" />
                                <small>Please provide the information of the DVD capacity</small>
                         </div> }

                       {selectValue === "Furniture" && 
                       <div className="row">
                            <div className="form-group col-md-4 col-md-offset-4  mt-2">
                                <label htmlFor="height">Height(CM)</label>
                                <input name='height' className="form-control" id='height'type="number" />
                                <small>Please provide the Height of the Furniture in cm</small>
                            </div>
                            <div className="form-group col-md-4 col-md-offset-4  mt-2">
                                <label htmlFor="width">width(CM)</label>
                                <input name='width' className="form-control" id='width'type="number" />
                                <small>Please provide the width of the Furniture in cm</small>
                            </div>
                            <div className="form-group col-md-4 col-md-offset-4  mt-2">
                                <label htmlFor="len">len(CM)</label>
                                <input name='len' className="form-control" id='len'type="number" />
                                <small>Please provide the width of the Furniture in cm</small>
                            </div>
                        </div> }
                    </div>
                        
                    
                 </div>
                 
             </div>
             
            </form>
}