const mongoose = require("mongoose") // va a almacenar los datos de las ciudades "cities"

const itinerariesSchema = new mongoose.Schema ({
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
})

const Itinerario = mongoose.model("itineraries",itinerariesSchema)

module.exports = Itinerario; hola