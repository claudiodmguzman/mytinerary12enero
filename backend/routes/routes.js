const Router = require("express").Router();
const datosController = require("../controllers/datosControllers")
const { ObtenerTodosLosDatos, ObtenerItinerario, ObtenerContinentes } = datosController // desestructuración del controlador
const usersControllers = require("../controllers/usersControllers")
const { nuevoUsuario, verifyEmail, accesoUsuario, cerrarCesion } = usersControllers
const validator = require("../controllers/validator")


Router.route("/datos") // "datos" parte de la url de la consulta
    .get(ObtenerTodosLosDatos)

Router.route("/itinerarios/:city")
    .get(ObtenerItinerario)

Router.route("/datosContinentes")
    .get(ObtenerContinentes)

Router.route("/cardSignUp")
    .post(validator, nuevoUsuario)

Router.route("/verify/:uniqueText")
    .get(verifyEmail)

Router.route("/signIn")
    .post(accesoUsuario)

Router.route("/signOut")
    .post(cerrarCesion)

module.exports = Router
