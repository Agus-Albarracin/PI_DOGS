const { Dog, Temperament } = require("../db");
const { ALL_DOGS_URL, API_KEY } = process.env;
const axios = require("axios");
const { map__thedogs } = require("../utils/map__thedogs")
// Trae los datos de la api y la DB de todos los perros

// INFO DE LA BASE DE DATOS
const get_DB_dogs = async () => {
  const find__ALL__dogs = await Dog.findAll({
    //El  método findAll ya lo conocemos del tutorial anterior. Genera una SELECT consulta estándar que recuperará todas las entradas de la tabla (a menos que esté restringida por algo como una wherecláusula, por ejemplo).
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const json_map__ALLDOGS = find__ALL__dogs.map(dog => (
    {
      ...dog.toJSON(),
    temperaments: dog.temperaments.map(temp => temp.name),
    }));
 
  return json_map__ALLDOGS ; // DATA DB Dogs
}

// INFO DE LA API
const get__API_dogs = async () => {

  const all__API_dogs = (await axios.get(`${ALL_DOGS_URL}?api_key=${API_KEY}`)).data;
  if (!all__API_dogs) throw Error("No se ha podido recuperar la información en este momento.");

  const API__data_dogs = map__thedogs(all__API_dogs);
 

  return API__data_dogs; // DATA API Dogs
}

// Unimos la informacion
const __getAllDogs = async () => {

  const API__dogs = await get__API_dogs();
  const DB___dogs = await get_DB_dogs();

  // Guardo ambas respuestas en un array
  const allDogs = [...API__dogs, ...DB___dogs];

  return allDogs;
};

module.exports = __getAllDogs;