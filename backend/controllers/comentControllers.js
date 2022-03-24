const Comentario = require("../models/comentario")
const bcryptjs = require("bcryptjs")
const nodemailer = require("nodemailer")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")


const comentControllers = {

    cargarComentario: async (req, res) => {
        let { itinerarioComent, mensageComent, userComent } = req.body.dataComents;
        console.log(req.body.dataComents)
        new Comentario({
            itinerario: itinerarioComent,
            user: userComent,
            comentaryUser: mensageComent,
        }).save()
        let comentario
        try {
            comentario = await Comentario.find({ itinerario: itinerarioComent }).populate("user")

        } catch (error) {
            console.log(error)

        }
        res.json({ success: true, response: { comentario } })
    },

    obtenerComentario: async (req, res) => {
        let id = req.params.id;
        let comentario
        try {
            comentario = await Comentario.find({ itinerario: id }).populate("user")

        } catch (error) {
            console.log(error)

        }
        res.json({ success: true, response: { comentario }, message: "Your comment has been uploaded" })
    },

    borrarComentario: async (req, res) => {
        let id = req.params.id;
        let comentario
        try {
            comentario = await Comentario.findOneAndDelete({ _id: id })

        } catch (error) {
            console.log(error)

        }
        res.json({ success: true, response: { comentario }, message: "Your comment has been deleted" })
    },

    modificarComentario: async (req, res) => {
        let id = req.params.id
        console.log(req.body)
        let newComents = { comentaryUser: req.body.data }
        console.log(newComents)
        let comentario
        try {
            comentario = await Comentario.findOneAndUpdate({ _id: id }, newComents)

        } catch (error) {
            console.log(error)

        }
        res.json({ success: true, response: { comentario }, message: "Your comment has been modified" })
    },
}

module.exports = comentControllers