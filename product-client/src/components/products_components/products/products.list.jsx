import React from "react";
import './product.style.css'
import './product-container.style.css'



export const ProductsList = ({products,isChecked})=>{

    return  <div className="product-list container" >
                
                {products.map((product)=>{
                   return  <label htmlFor={product.SKU} key={product.SKU}>
                        <div className="product-container">
                        <input type="checkbox" onChange={(e)=>isChecked(product.SKU,e)} className="delete-checkbox" id={product.SKU} />
                            <h6>{product.SKU}</h6>
                            <h2 className="text-dark">{product.name}</h2>
                            <h6 className="text-success ">{product.price} $</h6>
                            <h6>{product.dropList}</h6>
                            {product.dropList === "book" && <h6>{`Weight: ${product.weight}(KG)`}</h6>}
                            {product.dropList === "dvd" && <h6>{`Size: ${product.size} (MB)`}</h6>}
                            {product.dropList === "furniture" &&
                                    <h6>{`Dimensions: ${product.height}x${product.width}x${product.len} (CM)`}</h6>
                                }
                        </div>
                    </label>
                 })}
             </div>       
}