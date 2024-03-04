const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware pro zpracování JSONových požadavků
app.use(bodyParser.json());

// Simulace databáze nákupních seznamů
let shoppingLists = [];
let shoppingListIdCounter = 1;

// Simulace databáze položek v nákupních seznamech
let itemsInLists = {};

// End-point pro vytvoření nákupního seznamu
app.post('/api/shopping-lists', (req, res) => {
    const { owner } = req.body;
    const shoppingList = {
        id: shoppingListIdCounter,
        owner: owner,
        members: [owner],
        items: []
    };
    shoppingLists.push(shoppingList);
    shoppingListIdCounter++;
    res.status(201).json(shoppingList);
});

// End-point pro získání seznamu nákupních seznamů
app.get('/api/shopping-lists', (req, res) => {
    // Předpokládejme, že máme nějaký mechanismus pro získání ID aktuálně přihlášeného uživatele
    const userId = 1;
    const accessibleLists = shoppingLists.filter(list => list.members.includes(userId));
    res.json(accessibleLists);
});

// End-point pro získání detailu nákupního seznamu
app.get('/api/shopping-lists/:listId', (req, res) => {
    const listId = parseInt(req.params.listId);
    const shoppingList = shoppingLists.find(list => list.id === listId);
    if (shoppingList) {
        res.json(shoppingList);
    } else {
        res.status(404).json({ message: 'Nákupní seznam nenalezen' });
    }
});

// Další end-pointy pro přidání položky, odebrání položky, označení položky jako vyřešené a smazání nákupního seznamu
// by měly být implementovány obdobně.

// Spuštění serveru
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
