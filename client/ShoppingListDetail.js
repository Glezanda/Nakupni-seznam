// ShoppingListDetail.jsx
import React from 'react';
import NavBar from './NavBar';
import ListHeader from './ListHeader';
import ItemsList from './ItemsList';
import MembersList from './MembersList';

const ShoppingListDetail = ({ shoppingList, members }) => {
  return (
    <div>
      <NavBar />
      <h1>{shoppingList.name}</h1>
      <ListHeader />
      <ItemsList items={shoppingList.items} />
      <MembersList members={members} />
    </div>
  );
}

export default ShoppingListDetail;
