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
            .then(response => res.json({ response }))

    }
}


module.exports = comentControllers