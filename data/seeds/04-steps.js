
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 3, ingredient_id: 4, step_name: "Step 1", description: "Spread those buns" },
        {recipe_id: 3, ingredient_id: 1, step_name: "Step 2", description: "Insert your meat" },
        {recipe_id: 3, ingredient_id: 5, step_name: "Step 3", description: "Apply your condiment" },
      ]);
    });
};
