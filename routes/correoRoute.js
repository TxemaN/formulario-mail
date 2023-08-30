const express = require("express");
const router = express.Router();

const {rellenarFormulario, enviarFormulario} = require("../controller/enviarFormulario")

router.get("/", rellenarFormulario)

router.post("/enviado", enviarFormulario)








module.exports = router