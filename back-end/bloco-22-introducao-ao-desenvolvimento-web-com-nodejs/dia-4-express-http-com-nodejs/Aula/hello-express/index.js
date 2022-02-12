/* index.js */
const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25
 },
];

const recipesDrinks = [
  { id: 1, name: 'suco', price: 40.0, waitTime: 30 },
  { id: 2, name: 'vodka', price: 35.0, waitTime: 25 },
  { id: 3, name: 'agua', price: 35.0, waitTime: 00
 },
];

app.get('/drinks', function (req, res) {
  res.json(recipesDrinks);
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipesDrinks.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
})

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});


app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3001');
});