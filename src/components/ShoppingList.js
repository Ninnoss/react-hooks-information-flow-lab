import React, { useState } from 'react';
import Item from './Item';
import Filter from './Filter';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isInCart, setIsInCart] = useState([]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  function addToCart(id) {
    setIsInCart([...isInCart, id]);
  }

  function removeFromCart(id) {
    setIsInCart(isInCart.filter((itemID) => itemID !== id));
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === 'All') return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
            cart={isInCart.includes(item.id)}
            addToCart={() => addToCart(item.id)}
            removeFromCart={() => removeFromCart(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
