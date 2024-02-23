const selectMesuresPoids = require('../../database/model/selectMesuresPoids.js');

export const statMesures = async (req, res) => {
    try {
      const resultats = await selectMesuresPoids();
      res.json(resultats);
    } catch (erreur) {
      res.status(500).send("Erreur lors de la récupération des données");
    }
};
