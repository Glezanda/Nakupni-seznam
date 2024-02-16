// ShoppingListItem.jsx
import React from 'react';

const ShoppingListItem = ({ name, status }) => {
  return (
    <li>
      <span>{name}</span> - <span>{status}</span>
    </li>
  );
}

export default ShoppingListItem;
