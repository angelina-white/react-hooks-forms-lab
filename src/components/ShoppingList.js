import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {

  //itemForm
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")
  const [displayArr, setDisplayArr] = useState([...items])

  function handleNameAdd(event)
  {
    setItemName(event.target.value)
  }

  function handleCatAdd(event)
  {
    setItemCategory(event.target.value)
  }

  function onItemFormSubmit(event)
  {
    event.preventDefault()  
    const newItem = {id: (displayArr.length+1), name: itemName, category: itemCategory}
    setDisplayArr([...displayArr, newItem])
  }

  //filter
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inputChange, setInputChange] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleInputChange(event)
  {
    setInputChange(event.target.value);
  }

  const itemsToDisplay = displayArr.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const fullDisplay = itemsToDisplay.filter((item) =>
  {
    if (inputChange === "") return true;
    return item.name === inputChange;
  })

  return (
    <div className="ShoppingList">
      <ItemForm addName={handleNameAdd} addCat={handleCatAdd} onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleInputChange}/>
      <ul className="Items">
        {fullDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
