const temps__routes = require("express").Router();
const { getTempsHandler } = require("../handlers/getTempsHandler");

// GET todos los temperamentos
temps__routes.get("/", getTempsHandler);

module.exports = temps__routes;