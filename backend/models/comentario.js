const mongoose = require("mongoose") // va a almacenar los datos de las ciudades "cities"

const comentariosSchema = new mongoose.Schema({
    nameItineraryComent: { type: String, require: true },
    user: { type: String, require: false },
    comentaryUser: { type: String, require: true },
})

const Comentario = mongoose.model("comentarios", comentariosSchema)

module.exports = Comentario;