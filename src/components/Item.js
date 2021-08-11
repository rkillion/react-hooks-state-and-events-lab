import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart,toggleInCart] = useState(false);

  const cartClass = inCart ? "in-cart" : "";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=>toggleInCart(inCart=>!inCart)}>{inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
