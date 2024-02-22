const knex = require("../db")

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
function up (knex) {

    knex.schema.createTable('mesures_poids', (table) => {
        table.increments();
        table.integer('id_bac');
        table.float('poids');
        table.date('times');
    });
    return knex.select("*").fromRaw("SELECT 'mesure_poids' from pg_tables where shema_name = 'public'");
    // knex('pg_catalog.pg_tables')
    // .select('tablename')
    // .where({schemaname:'public'})
}

// function down (knex) {
//     knex.schema.dropTable('mesures_poids');
//   };


// npx knex migrate:latest
console.log('migrate')
console.log(up(knex))

//up(knex);