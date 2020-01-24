const express = require('express')
const router = express.Router({
    mergeParams: true
}); 
const Recipes = require('../recipes/recipes-model')

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes);
    })
})

router.get('/:id', (req, res) => {
    Recipes.getRecipes(req.params.id)
    .then(recipe => {
        res.json(recipe);
    })
})
router.get('/:id/shoppingList', (req, res) => {
    Recipes.getShoppingList(req.params.id)
    .then(ingredients => {
        res.json(ingredients);
    })
})
router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
    .then(steps => {
        res.json(steps);
    })
})


module.exports = router;