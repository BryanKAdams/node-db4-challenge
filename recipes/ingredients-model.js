const db = require('../db-config')

//- `getRecipes()`: should return a list of all recipes in the database.
//- `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
//- `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

module.exports = {
 getIngredients,
 getRecipesById

}

function getIngredients() {
    // select * fom users;
    return db('ingredients');
    // return db('users'); // does the same thing
}
function getRecipesById(ingredientId) {
    // select * fom users;
    return db("ingredients")
    .join('recipe_ingredient', 'ingredients.id', '=', 'recipe_ingredient.ingredient_id')
    .join('recipes', 'recipes.id', 'recipe_ingredient.recipe_id')
    .where('ingredients.id', ingredientId)
    .select('recipe_name','ingredients.ingredient_name','recipe_ingredient.ingredient_quantity')
}

// function getShoppingList(recipeId) {
//     // select * from schemes where id = ?
//     return db("recipes")
//         .join('recipe_ingredient', 'recipes.id', '=', 'recipe_ingredient.recipe_id')
//         .join('ingredients', 'ingredients.id', 'recipe_ingredient.ingredient_id')
//         .where('recipes.id', recipeId)
//         .select('recipe_name','ingredients.ingredient_name','recipe_ingredient.ingredient_quantity')
// }