const { Dogs, Temperaments } = require("../../db")
const { DOGS_URL, API_KEY } = process.env;
const axios = require("axios");
const { map__thedogs } = require("../utils/map__thedogs")
// Trae los datos de la api y la DB de todos los perros

// INFO DE LA BASE DE DATOS
const get_DB_dogs = async () => {
  const find__ALL__dogs = await Dogs.findAll({
    //El  método findAll genera una SELECT consulta estándar que recuperará todas las entradas de la tabla (a menos que esté restringida por algo como una where).

    include: {                 
      model: Temperaments,      
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  //el "include" indica que la tabla debera respetar los siguientes elementos de la tabla.
  //en este caso nos devolvera aquellos datos que se incluyan en el model Temperaments.
  //La opción attributes permite indicar cuales son los campos que se van a recuperar de cada fila que cumpla el criterio de búsqueda.
  // en donde tengan el atributo "name", el cual se puede cambiar poniendolo entre [].

  const json_map__ALLDOGS = find__ALL__dogs.map(dog => (
    {
      ...dog.toJSON(), 
    temperament: dog.temperament.map(temp => temp.name),
    }));
 //esta funciones nos va a devolver un json donde se nos va a devolver todos los perros o el nombre del perro que le pasemos.
  return json_map__ALLDOGS ; // DATA DB Dogs
}

// INFO DE LA API
const get__API_dogs = async () => {

  const all__API_dogs = (await axios.get(`${DOGS_URL}api_key=${API_KEY}`)).data;
  

  if (!all__API_dogs) throw Error("No se ha podido recuperar la información en este momento.");
  
  //(all__API.dogs.map(dog => dog.temperaments).toString()).split(",")
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

module.exports =  __getAllDogs;