// ShoppingListForm.jsx
import React, { useState } from 'react';

const ShoppingListForm = () => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Název seznamu:
        <input type="text" value={name} onChange={handleInputChange} />
      </label>
      <button type="submit">Vytvořit</button>
    </form>
  );
}

export default ShoppingListForm;
