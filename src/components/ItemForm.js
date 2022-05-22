import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({addName, addCat, onItemFormSubmit}) {
  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={addName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={addCat} >
          <option value="Produce" >Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick={onItemFormSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
