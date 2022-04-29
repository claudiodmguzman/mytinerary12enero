const mongoose = require("mongoose"); // va a almacenar los datos de las continentes "continentes"


const continentesSchema = new mongoose.Schema ({
    nameContinents:{type:String,require:true},
    nameCityContinents:{type:String,require:true},
    nameCountryContinents:{type:String,require:true},
    imageGlobo:{type:String,require:true},
    imageContinent:{type:String,require:true},
})

const Contynente = mongoose.model("Continentes",continentesSchema)

module.exports = Contynente;