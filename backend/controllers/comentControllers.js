const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")
const nodemailer = require("nodemailer")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")


const comentControllers = {

    cargarComentario: async (req, res) => {
        let { itinerario, mensage, user } = req.body.dataComents;
        console.log(req.body.dataComents)
    }
}


module.exports = comentControllers