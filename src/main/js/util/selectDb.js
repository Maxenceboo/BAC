const selectMesureP = require("../database/model/selectMesuresPoids");

const printMesuresPoids = async () => {
  try {
    const resultats = await selectMesureP();
    console.table(resultats);
  } catch (erreur) {
    console.error("Erreur lors de la récupération des données");
  }
};

printMesuresPoids();