const __getAllDogs = require("../controllers/get/___getAllDogs");
const _getDogById = require("../controllers/get/_getDogById");
const _getDogByName = require("../controllers/get/_getDogByName");

// Maneja la ruta GET de todos los perros o por nombre 
const get__all_or_name_dogs = async (req, res) => {
  try {
    const { name } = req.query;

    // Si no me pasan el name, traigo todos
    if(!name) return res.status(200).send(await __getAllDogs());
    return res.send(await _getDogByName(name));
  }
  catch (error) {
    return res.status(500).json(error.message)
  }
}

// Maneja la ruta GET de los perros por id
const get__id_dogs = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await _getDogById(id);
    return res.status(200).json(response)
  }
  catch (error) {
    return res.status(500).json(error.message)
  }
}


module.exports = {
  get__all_or_name_dogs,
  get__id_dogs,
}