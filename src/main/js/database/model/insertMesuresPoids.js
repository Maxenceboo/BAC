const knex = require('../db');


export async function insertMesuresPoids(poids) {
    await knex('mesures_poids').insert({
        poids: poids,
        times: new Date()
    });
}