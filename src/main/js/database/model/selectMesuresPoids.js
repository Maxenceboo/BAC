const knex = require('../db');

async function selectMesuresPoids() {
  return knex('mesures_poids').select();
}

module.exports = selectMesuresPoids;