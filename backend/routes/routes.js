const Router = require("express").Router();
const datosController = require("../controllers/datosControllers")
const {ObtenerTodosLosDatos,ObtenerItinerario} = datosController // desestructuración del controlador de Ciudades
const usersControllers = require("../controllers/usersControllers")
const {nuevoUsuario} = usersControllers


Router.route("/datos") // "datos" parte de la url de la consulta
.get(ObtenerTodosLosDatos)

Router.route("/itinerarios/:city")
.get(ObtenerItinerario)

Router.route("/signup")
.post(nuevoUsuario)

module.exports = Router

