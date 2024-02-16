// Dashboard.jsx
import React from 'react';
import NavBar from './NavBar';
import ShoppingLists from './ShoppingLists';

const Dashboard = ({ shoppingLists }) => {
  return (
    <div>
      <NavBar />
      <h1>Přehled nákupních seznamů</h1>
      <ShoppingLists shoppingLists={shoppingLists} />
    </div>
  );
}

export default Dashboard;
