// CreateShoppingList.jsx
import React from 'react';
import NavBar from './NavBar';
import ShoppingListForm from './ShoppingListForm';

const CreateShoppingList = () => {
  return (
    <div>
      <NavBar />
      <h1>Vytvoření nového nákupního seznamu</h1>
      <ShoppingListForm />
    </div>
  );
}

export default CreateShoppingList;
