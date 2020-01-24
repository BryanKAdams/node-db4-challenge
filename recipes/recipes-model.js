const db = require("../db-config");
//- `getRecipes()`: should return a list of all recipes in the database.
//- `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
//- `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesIngredients
};

function getRecipes(id) {
  let query = db("recipes");
  if (id) {
   query
      .where("recipes.id", id)
      .first();

    const promises = [query, this.getRecipesIngredients(id)];

    return Promise.all(promises).then(function(results) {
      let [recipes, ingredients] = results;

      if (recipes) {
        recipes.ingredients = ingredients;
        return recipes
      } else {
        return null;
      }
    });
  } else {
    return db("recipes");
  }
}
function getShoppingList(recipeId) {
  // select * from schemes where id = ?
  return db("recipes")
    .join("recipe_ingredient", "recipes.id", "=", "recipe_ingredient.recipe_id")
    .join("ingredients", "ingredients.id", "recipe_ingredient.ingredient_id")
    .where("recipes.id", recipeId)
    .select(
      "recipe_name",
      "ingredients.ingredient_name",
      "recipe_ingredient.ingredient_quantity"
    );
}

function getInstructions(recipeId) {
  // select * from schemes where id = ?
  return db("recipes")
    .join("steps", "recipes.id", "=", "steps.recipe_id")
    .join("ingredients", "ingredients.id", "steps.ingredient_id")
    .where("recipes.id", recipeId)
    .select(
      "recipe_name",
      "ingredients.ingredient_name",
      "steps.step_name",
      "steps.description"
    );
}

function getRecipesIngredients(id) {
  return db("recipe_ingredient")
    .join("ingredients", "ingredients.id", "recipe_ingredient.ingredient_id")
    .where("recipe_ingredient.recipe_id", id)
}
