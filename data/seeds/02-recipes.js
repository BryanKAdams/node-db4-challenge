exports.seed = function(knex) {
  // Deletes ALL existing entries
  // Inserts seed entries
  return knex("recipes").insert([
    { recipe_name: "Gross Mix" },
    { recipe_name: "You Okay Bud?" },
    { recipe_name: "Completed Spicy Hotdog" },
    { recipe_name: "Hamburger" },
    { recipe_name: "Balanced Meal" }
  ]);
};
