// ShoppingLists.jsx
import React from 'react';
import ShoppingListItem from './ShoppingListItem';

const ShoppingLists = ({ shoppingLists }) => {
  return (
    <ul>
      {shoppingLists.map(list => (
        <ShoppingListItem key={list.id} name={list.name} status={list.status} />
      ))}
    </ul>
  );
}

export default ShoppingLists;
