const express = require("express");
const routes = express.Router();

const dogs__routes= require("./dogs__routes")
const temps__routes = require("./temps__routes")

routes.use("/dogs", dogs__routes);
routes.use("/temperaments", temps__routes);

module.exports = { routes }


