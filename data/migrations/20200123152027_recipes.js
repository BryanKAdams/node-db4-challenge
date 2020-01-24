exports.up = function(knex) {
  return knex.schema
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("ingredient_name", 128)
        .notNullable()
        .index();
    })
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .string("recipe_name", 255)
        .notNullable()
        .index();
    })
    .createTable("recipe_ingredient", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.float("ingredient_quantity");
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.string("step_name");
      tbl.string("description");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipe_ingredient")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients");
};
