const mongoose = require("mongoose") // va a almacenar los datos de las ciudades "cities"

const comentariosSchema = new mongoose.Schema({
    itinerario: { type: mongoose.Types.ObjectId,ref:"itineraries", require: true },
    user: { type: mongoose.Types.ObjectId,ref:"users", require: true },
    comentaryUser: { type: String, require: true },
})

const Comentario = mongoose.model("comentario", comentariosSchema)

module.exports = Comentario;