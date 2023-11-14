const { Temperaments } = require("../db")
const ___getAllTemps = require("../controllers/get/___getAllTemps");

// Maneja la ruta GET de todos los temperamentos
const getTempsHandler = async (req, res) => {
  try {
    await ___getAllTemps();
    const all__temps = await Temperaments.findAll();
//El método findAll permite recuperar varias filas en base a un criterio formado en la cláusula where. El método devuelve un array con las filas recuperadas. Cada fila se corresponde con una instancia de la clase del modelo.
    res.status(200).send(all__temps)
  }
  catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = {
  getTempsHandler
}


