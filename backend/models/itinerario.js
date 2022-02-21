const mongoose = require("mongoose") // va a almacenar los datos de las ciudades "cities"

const itinerariesSchema = new mongoose.Schema ({
    cityTour:{type:String,require:true},
    // nameTour:{},
    // descriptionTour:{},
    // availableLanguages:{},
    // priceTour:{},
    // durationTour:{},
    // imgTour:{},
})

const Itinerario = mongoose.model("itineraries",itinerariesSchema)

module.exports = Itinerario;