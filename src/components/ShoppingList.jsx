import React from 'react';

const ShoppingList = ({ filteredShoppingList, handleDeleteItem }) => {
  return (
    <ul className="item-list">
      {filteredShoppingList.map((item, idx) => (
        <li key={idx} className="item">
          {item} <button onClick={() => handleDeleteItem(item)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;
