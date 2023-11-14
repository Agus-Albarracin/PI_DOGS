const dogs__router = require("express").Router();
// const { get__all_or_name_dogs, get__id_dogs} = require("../handlers/getDogsHandler");
const { post__dogs  } = require("../handlers/postDogsHandler")
const { deleteDogsHandler  } = require("../handlers/deleteDogsHandler")

//imports de rutas por separado.
const {get_name_id_dogs, get__alldogs} = require("../handlers/getDogsHandler");

// GET todos
dogs__router.get("/", get__alldogs)


// GET por id
dogs__router.get("/:id", get_name_id_dogs);

// POST nuevo perro
dogs__router.post("/", post__dogs );

// DELETE por id
dogs__router.delete("/:id", deleteDogsHandler );

module.exports = dogs__router;

