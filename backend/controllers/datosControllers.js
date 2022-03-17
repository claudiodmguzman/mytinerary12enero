const Cities = require("../models/cities.js")
const Itinerario = require("../models/itinerario.js")

const datosController = {
    ObtenerTodosLosDatos:async(req,res) => {
       
        let cities
        let error = null
        try {
            cities = await Cities.find()
            
        } catch (err) {
            error = err
            console.log(error)
            
            
        }

        res.json({
            response:error?"ERROR":{cities},
            success:error?false:true,
            error:error
        })

    }, 

    ObtenerItinerario:async(req,res) => {
       
        let itinerario
        console.log(req.params)

        const city = req.params.city
        let error = null
        try {
            itinerario = await Itinerario.find({cityTour:city})
            
        } catch (err) {
            error = err
            console.log(error)
            
        }

        res.json({
            response:error?"ERROR":{itinerario},
            success:error?false:true,
            error:error
        })

    } 
}

module.exports = datosController



// req=require res=response