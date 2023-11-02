const { Dogs, Temperaments } = require("../db")

// Crea un nuevo perro y lo guarda en la DB

const postNewDog = async (name, image, height, weight, life_span, temperaments) => {

  if(!name || !image || !height || !weight || !life_span || !temperaments) throw Error ("Se requiere que completes todos los campos para continuar")

  const new__Dog = await Dogs.create({name, image, height, weight, life_span,})
    //El metodo create,combina los métodos build y save.
    //Aunque un modelo es una clase no hace falta instanciarlo con New, el "build" lo hace directamente pero no se comunica con la BD.
    //Para realmente guardar (es decir, conservar) esta instancia en la base de datos, se debe utilizar el metodo "save".
    
  let add__temps = await Temperaments.findAll({
  //El  método findAll ya lo conocemos del tutorial anterior. Genera una SELECT consulta estándar que recuperará todas las entradas de la tabla (a menos que esté restringida por algo como una wherecláusula, por ejemplo).
    where: { name: temperaments }
  })
  new__Dog.addTemeperaments(add__temps)
  //CORREGIR EL ADDTemperaments EN CASO DE QUE FALLE ALGO.
  
  return new__Dog;
}

module.exports = postNewDog;