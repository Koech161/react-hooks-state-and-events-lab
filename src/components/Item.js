import React, { useState } from "react";

function Item({ name, category }) {
const [isInCart,setIsInCart]=useState(false)
 
  function handleClick(){
    setIsInCart(prevCart=> !prevCart)
    
  }
  return (
    <li className={isInCart? 'in-cart': ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{isInCart ? 'Ramove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
