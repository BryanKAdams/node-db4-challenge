const express = require('express')
const router = express.Router({
    mergeParams: true
}); 
const Ingredients = require('./ingredients-model')

router.get('/', (req, res) => {
    Ingredients.getIngredients()
    .then(ingredients => {
        res.json(ingredients);
    })
})

router.get('/:id/recipes', (req, res) => {
    Ingredients.getRecipesById(req.params.id)
    .then(ingredients => {
        res.json(ingredients);
    })
})
// router.get('/:id/instructions', (req, res) => {
//     Recipes.getInstructions(req.params.id)
//     .then(steps => {
//         res.json(steps);
//     })
// })


module.exports = router;