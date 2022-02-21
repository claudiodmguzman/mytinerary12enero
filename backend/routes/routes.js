const Router = require("express").Router();
const datosController = require("../controllers/datosControllers")
const {ObtenerTodosLosDatos,ObtenerItinerario} = datosController // desestructuración del controlador de Ciudades


Router.route("/datos") // "datos" parte de la url de la consulta
.get(ObtenerTodosLosDatos)

Router.route("/itinerarios/:city")
.get(ObtenerItinerario)

module.exports = Router
