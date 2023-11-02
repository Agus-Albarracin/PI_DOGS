//Este archivo es un helpers de tipo MAP para facilitar la tarea del getAllDogs a la hora de traer la informacion de la API.

const map__thedogs = (arr) =>
arr.map((element) => {
    const temps = element.temperament ? element.temperament.split(/(?:,| )+/) : [];
    return {
      id: element.id,
      name: element.name,
      image: element.reference_image_id,
      height: element.height.metric,
      weight: element.weight.metric,
      life_span: element.life_span,
      createInDb: false,
      temperaments: temps,
    };
});

// const map__thedogs = ({ id, name, image, height, weight, life_span }) => 
//podria hacer un destrucctirng de los elementos del array para despues
//colocarlor sin el " element." por cada item.


module.exports = {
  map__thedogs,
};


//"reference_image_id" = image.url