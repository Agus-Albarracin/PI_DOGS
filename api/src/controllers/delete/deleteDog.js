const { Dogs } = require("../../db");

// Busca el perro por id y lo borra
const deleteDog = async (id) => {
  const delete_dog_sequeleze = await Dogs.findByPk(id)
//El metodo findByPk de sequeleze, obtiene solo una entrada de la tabla, utilizando la clave principal proporcionada.
  if(!delete_dog_sequeleze) throw Error("No se ha encontrado el perro que intentas eliminar o ya se ha eliminado!")

  await delete_dog_sequeleze.destroy();
  //El método destroy de sequeleze permite eliminar filas de la tabla. Si se invoca sin argumentos y desde la instancia del modelo elimina la fila subyacente. Si se invoca desde el modelo se pueden eliminar una o varias filas sin necesidad de recuperarlas a instancias.
  return delete_dog_sequeleze;
}

module.exports = deleteDog;


