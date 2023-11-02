const { Temperament } = require("../db")
const ___getAllTemps = require("../controllers/get/___getAllTemps");

// Maneja la ruta GET de todos los temperamentos
const getTempsHandler = async (req, res) => {
  try {
    await ___getAllTemps();
    const all__temps = await Temperament.findAll();
    res.status(200).send(all__temps)
  }
  catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = {
  getTempsHandler
}


