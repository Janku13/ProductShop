import React from "react";



export const Book = ()=>{
        return  <div className="form-group col-md-4 col-md-offset-4">
                        <label htmlFor="weight">Weight (KG)</label>
                        <input name='weight' className="form-control" id='weight'type="text" />
                        <small>What is the Weight of the book in kg?</small>
                </div>
}