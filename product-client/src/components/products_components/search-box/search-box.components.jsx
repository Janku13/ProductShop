import React from 'react'
import './search-box.style.css'
export const SearchBox = ({searchChange}) =>{
    //once we change the state of the field, it re renders and then uses the filter to find the products
    return <input onChange={searchChange} className='search' type="search" placeholder='Search Product'/>
}