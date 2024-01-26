const knex = require("knex");
const { migrate } = require("../db")

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('mesures_poids', (table) => {
        table.float('poids')
    })
}

exports.down = function(knex) {
    knex.schema.dropTable('mesures_poids');
  };

// npx knex migrate:latest