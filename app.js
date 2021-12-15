import express from 'express';

import { html } from './config.js';

const app = express();
const PORT = 3000;

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
} from './models/recipes.js';

app.use(express.static('public'));
app.use(express.json());

/** DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get('/', function (req, res) {
  res.sendFile(html);
});

/** YOUR ROUTES GO HERE */

app.get('/recipes', (req, res) => {
  const data = getRecipes();
  res.json({ success: true, payload: data });
});

app.get('/recipes/:id', (req, res) => {
  const data = getRecipeByID(+req.params.id);
  res.json({ success: true, payload: data });
});

app.post('/recipes', (req, res) => {
  const dataLength = getRecipes();
  const result = req.body;
  const data = {
    id: dataLength.length + 1,
    ...result,
  };
  const dataResult = createRecipe(data);
  res.json({ success: true, payload: dataResult });
});

app.put('/recipes/:id', (req, res) => {
  const dataBody = req.body;

  const data = updateRecipeByID(Number(req.params.id), dataBody);
  res.json({ success: true, payload: data });
});

/** END OF YOUR ROUTES */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
