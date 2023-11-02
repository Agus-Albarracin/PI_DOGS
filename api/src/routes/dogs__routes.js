const dogs__router = require("express").Router();
const { get__all_or_name_dogs, get__id_dogs, } = require("../handlers/getDogsHandler");
const { post__dogs  } = require("../handlers/postDogsHandler")
const { deleteDogsHandler  } = require("../handlers/deleteDogsHandler")

// GET todos o por nombre
dogs__router.get("/", get__all_or_name_dogs);

// GET por id
dogs__router.get("/:id", get__id_dogs);

// POST nuevo perro
dogs__router.post("/", post__dogs );

// DELETE por id
dogs__router.delete("/:id", deleteDogsHandler );

module.exports = dogs__router;