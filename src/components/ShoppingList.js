import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log(items);
const [selectedCategory,setselectedCategory]=useState('All')
function handleChange(e){
  setselectedCategory(e.target.value)
}
const itemsToDisplay= items.filter((item)=>{
  if(selectedCategory==='All'){
    return true
  }else{
    return item.category===selectedCategory
  }
})
const  itemList= itemsToDisplay.map((items) =>( 
  <li key={items.id}>
  {items.category}
  </li>
))
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
       
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
