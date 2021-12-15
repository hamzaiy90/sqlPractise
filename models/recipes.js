import recipes from '../libs/recipes.js';

// GET ALL RECIPES
export function getRecipes() {
  return recipes;
}

// GET A RECIPE BY ID
export function getRecipeByID(id) {
  const found = recipes.find((recipe) => recipe.id === id);
  return found;
}

// CREATE A RECIPE
export function createRecipe(recipe) {
  recipes.push(recipe);
  return recipes.length;
}

// UPDATE A RECIPE BY ID
export function updateRecipeByID(id, data) {
  // const updatedData = [...recipes.slice(0, id - 1), data, ...recipes.slice(id)];
  // recipes.splice(0, recipes.length, updatedData);

  const found = recipes.findIndex((obj) => obj.id === id);
  recipes[found] = data;
  return recipes;
}

// DELETE A RECIPE BY ID
export function deleteRecipeByID(id) {}
