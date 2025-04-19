import React, {useState} from "react";

function Item({ name, category }) {
  const [addCart, setAddCart] = useState(false)

  function handleCartButton(){
    setAddCart((prev) => !prev)
  }

  return (
    <li className={addCart ?  "li in-cart": null}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addCart ? "button remove" : "button add" } onClick={handleCartButton}>{addCart ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
