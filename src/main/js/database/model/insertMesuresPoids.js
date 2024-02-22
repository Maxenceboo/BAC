const knex = require('../db');


async function insertMesuresPoids(poids, id, date){
    await knex.insert({
        id_bac: id,
        poids: poids,
        times: date
    }).into('mesures_poids');
}

module.exports = { insertMesuresPoids };