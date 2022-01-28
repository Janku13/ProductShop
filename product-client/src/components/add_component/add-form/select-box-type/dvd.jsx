import React from "react";



export const DVD = ()=>{
    return <div className="form-group col-md-4 col-md-offset-4">
                <label htmlFor="size">Size(MB)</label>
                <input  name = 'size' className="form-control" id='size'type="text" />
                <small>Please provide the information of the DVD capacity</small>
        </div>

}