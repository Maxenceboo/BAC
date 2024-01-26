const knex = require('../db');


async function insertMesuresPoids(poids) {
    await knex('mesures_poids').insert({
        poids: poids,
        date_mesure: new Date()
    });
}

module.exports = { insertMesuresPoids };