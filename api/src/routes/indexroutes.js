const express = require("express");
const router = express.Router();

const dogs__routes= require("./dogs__routes")
const temps__routes = require("./temps__routes")

router.use("/dogs", dogs__routes);
router.use("/temperaments", temps__routes);

module.exports = { router }
