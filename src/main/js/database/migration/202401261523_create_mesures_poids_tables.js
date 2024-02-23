const knex = require("../db")

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
function up (knex) {

    /*knex.schema.withSchema('public').createTable('mesures_poids', function (table) {
        table.increments();
    });*/
      

    return knex.schema.createTable('mesures_poids', (table) => {
        table.increments();
        table.integer('id_bac');
        table.float('poids');
        table.date('times');
    });

}

// npx knex migrate:latest
console.log('migrate')
// console.log(up(knex))

//up(knex);