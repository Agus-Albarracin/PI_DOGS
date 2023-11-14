//Este archivo es un helpers de tipo MAP para facilitar la tarea del getAllDogs a la hora de traer la informacion de la API con los atributos agregados.

const map__thedogs = (arr) =>
arr.map((element) => {
    const temps = element.temperament ? element.temperament.split(/(?:,| )+/) : [];
    //esto me va a devolver un un array separados en caso de que no tenga espacio, de que tenga una coma o que tenga un espacio.
    return {
      id: element.id,
      name: element.name,
      image: element.image.url,
      height: element.height.metric,
      weight: element.weight.metric,
      life_span: element.life_span,
      createInDb: false,
      temperament: temps,
    };
});

// const map__thedogs = ({ id, name, image, height, weight, life_span }) => 
//podria hacer un destrucctirng de los elementos del array para despues
//colocarlor sin el " element." por cada item.


module.exports = {
  map__thedogs,
};


//"reference_image_id" = image.url