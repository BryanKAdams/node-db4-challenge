exports.seed = function(knex) {
  // Deletes ALL existing entries

  return knex("ingredients").insert([
    { ingredient_name: "Spicy Hot Hog" },
    { ingredient_name: "Tomato" },
    { ingredient_name: "Lettuce" },
    { ingredient_name: "Bun" },
    { ingredient_name: "Ketchup" },
    { ingredient_name: "Hamburger" },
    { ingredient_name: "Churro" },
    { ingredient_name: "Orange Juice" }
  ]);
};
