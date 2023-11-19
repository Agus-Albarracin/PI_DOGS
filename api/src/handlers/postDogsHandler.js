const postNewDog = require("../controllers/post/postNewDog");

// Maneja la ruta POST de los perros
const post__dogs = async (req, res) => {
    try {
      const { name, image, height, weight, life_span, temperament } = req.body;
  
      const newDog = await postNewDog(name, image, height, weight, life_span, temperament)
  
      res.status(200).send(newDog);
    }
    catch (error) {
      return res.status(404).json(error.message)
    }
  }

  module.exports = {  post__dogs }


