const React = require('react');

const ShoppingListDetail = () => {
  return (
    <div>
      <h2>Název seznamu:</h2>
      <ul>
        <li>Položka 1 (nevyřešená)</li>
        <li>Položka 2 (vyřešená)</li>
        <li>Položka 3 (nevyřešená)</li>
        {/* Další položky seznamu */}
      </ul>
      <button>Tlačítko Přidat položku</button>
    </div>
  );
};

module.exports = ShoppingListDetail;
