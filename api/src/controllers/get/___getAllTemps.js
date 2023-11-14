const axios = require("axios");
const { ALL_DOGS_URL, API_KEY } = process.env;
const { Temperaments } = require("../../db")
const { map__thedogs } = require("../utils/map__thedogs");

// Trae los temperamentos de la api y los guarda en la DB
const __getAllTemps = async () => {
  const all__API_dogs = (await axios.get(`${ALL_DOGS_URL}?api_key=${API_KEY}`)).data;
  if (!all__API_dogs) throw Error("No se ha podido recuperar la información en este momento.");

  const API_DATA_Dogs = map__thedogs(all__API_dogs);

  // Guardo todos los temperamentos separados por coma en un solo array
  const the_temps = (API_DATA_Dogs.map(dog => dog.temperament).toString()).split(",");
  //No seria mejor usar un join y unir todos los strings de , en un solo array?
  // const the_temps = (API_DATA_DOGS.map(dog => dog.temperament).toString().join(","))
  
  // Se eliminan espacios innecesarios adelante y atras
  const clean_temps = the_temps.map(temp => {
    if(temp[0] === " ") temp.trim()
    return temp;
  })

  // Elimina los elementos vacios
  const all__temps = clean_temps.filter((el) => el !== "");

  // Guardo los temperamentos en la DB ya filtrados para que no se repitan
  all__temps.forEach(temp =>{
    Temperaments.findOrCreate({ 
      where: { name: temp },
    });

    //En esta funcion le indicaremos que por cada temperamento nos haga una tabla donde tendremos la columna name, a la cual se le asignen los temperaments.
    
    //El método findOrCreate creará una entrada en la tabla a menos que pueda encontrar una que cumpla con las opciones de consulta. En ambos casos, devolverá una instancia (ya sea la instancia encontrada o la instancia creada) y un booleano que indica si esa instancia fue creada o ya existía.
    //En caso de tener la opcion "where" se considera para encontrar la entrada y la opcion "default" se utiliza para definir lo que se debe crear en caso de que no se encuentre nada. Si defaultsno contienen valores para cada columna, Sequelize tomará los valores dados where(si están presentes).
  });

return "Temperaments created";

};

module.exports =__getAllTemps;