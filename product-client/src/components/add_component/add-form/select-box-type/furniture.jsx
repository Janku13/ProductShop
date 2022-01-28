import React from "react";



export const Furniture = ()=>{
    return <div>
            <div className="form-group col-md-4 col-md-offset-4">
            <label htmlFor="height">Height(CM)</label>
            <input name='height' className="form-control" id='height'type="text" />
            <small>Please provide the Height of the Furniture in cm</small>
            </div>
            <div className="form-group col-md-4 col-md-offset-4">
            <label htmlFor="width">width(CM)</label>
            <input name='width' className="form-control" id='width'type="text" />
            <small>Please provide the width of the Furniture in cm</small>
            </div>
            <div className="form-group col-md-4 col-md-offset-4">
                <label htmlFor="length">Length(CM)</label>
                <input name='length' className="form-control" id='length'type="text" />
                <small>Please provide the Length of the Furniture in cm</small>
            </div>

        </div> 

}