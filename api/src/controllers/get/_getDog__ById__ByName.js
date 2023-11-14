const __getAllDogs = require("./___getAllDogs");


const _getDog__ById__ByName= async (id) => {
    const all__Dogs = await __getAllDogs();
    if(!all__Dogs) throw Error("No se ha podido recuperar la información en este momento.")
  
    // Busco por id o nombre
    const find__id_dog = all__Dogs.find((dog) =>
    
    dog.name.toLowerCase() === id.toLowerCase() || dog.id === Number(id));


    if(!find__id_dog) throw Error("No se ha encontrado el perro que intentas buscar por ID o nombre")
    return find__id_dog;
  }

module.exports = _getDog__ById__ByName;
