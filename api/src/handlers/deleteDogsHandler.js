const deleteDog = require("../controllers/delete/deleteDog");

// Maneja la ruta DELETE de los perros
const deleteDogsHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const response = await deleteDog(id)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(404).json(error.message)
    }
}

module.exports = { deleteDogsHandler }