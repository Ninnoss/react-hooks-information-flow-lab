import React, { useState } from 'react';

function Item({ name, category, cart, addToCart, removeFromCart }) {
  const [item, setItem] = useState(cart);

  const cartClass = item ? 'in-cart' : '';

  // this is to maintain the elements in the cart even after the filtering
  function setCart() {
    setItem(!item);
    item ? removeFromCart() : addToCart();
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={setCart} className={item ? 'remove' : 'add'}>
        {item ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
