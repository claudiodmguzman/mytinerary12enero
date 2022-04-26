const Cities = require("../models/cities.js")
const Itinerario = require("../models/itinerario.js")
const Continentes = require("../models/continentes.js")
const { useReducer } = require("react")
// const { response } = require("express")

const datosController = {
    ObtenerTodosLosDatos: async (req, res) => {
        let cities
        let error = null
        try {
            cities = await Cities.find()

        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? "ERROR" : { cities },
            success: error ? false : true,
            error: error
        })
    },

    ObtenerItinerario: async (req, res) => {
        let itinerario
        console.log(req.params)
        const city = req.params.city
        let error = null
        try {
            itinerario = await Itinerario.find({ cityTour: city })
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? "ERROR" : { itinerario },
            success: error ? false : true,
            error: error
        })
    },

    ObtenerContinentes: async (req, res) => {
        let continentes
        let error = null
        try {
            continentes = await Continentes.find()
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? "ERROR" : { continentes },
            success: error ? false : true,
            error: error
        })
    },

    ObtenerContinentario: async (req, res) => {
        let continentario
        console.log(req.params)
        const contynente = req.params.contynente
        let error = null
        try {
            continentario = await Cities.find({ name: contynente })
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? "ERROR" : { continentario },
            success: error ? false : true,
            error: error
        })
    },

    likeDisLike: async (req, res) => {
        const id = req.params.id;
        const user = req.body.user
        let itinerary

        try {
            itinerary = await Itinerario.find({ _id: id })
            if (itinerary.likes.includes(user)) {
                Itinerario.findOneAndUpdate({ _id: id }, { $pull: { likes: user } }, { new: true })
                    .then(response => res.json({ success: true, response: response.likes }))
                    .catch(error => console.log(error))
            }
            else {
                Itinerario.findOneAndUpdate({ _id: id }, { $push: { likes: user } }, { new: true })
                    .then(response => res.json({ success: true, response: response.likes }))
                    .catch(error => console.log(error))
            }
        }
        catch (err) {
            error = err
            res.json({ success: false, response: error })
        }
    },


}

module.exports = datosController