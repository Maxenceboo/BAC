const knex = require("knex");
const { migrate } = require("../db")

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up (knex) {
    return knex.schema.createTable('mesures_poids', (table) => {
        table.float('poids');
        table.date('times');
        //table.bigInteger('times');

    })
}

export function down (knex) {
    knex.schema.dropTable('mesures_poids');
  };

// npx knex migrate:latest