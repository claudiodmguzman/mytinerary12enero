//require("../styleBackend/styleBackend.css")
const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")
const nodemailer = require("nodemailer")
const crypto = require("crypto")

async function sendEmail(email, uniqueText) {

    const transporter = nodemailer.createTransport({

        host: "smtp.gmail.com", // protocolo de email (MPOP3)
        port: 465,
        secure: true,
        auth: {

            user: "mypruebaconsulta@gmail.com",
            pass: process.env.NODEMAILER
        }

    })

    const sender = "mypruebaconsulta@gmail.com"
    const mailOptions = {
        from: sender,
        to: email,
        subject: "MyTinerary: User e-mail verification",
        html:`  <h1 style="color: #a0773a; font-family: Dancing Script; font-size: 120px; text-align: center;">MyTinerary</h1>
                </br>
                <h2>Click <a href=http://localhost:4000/api/verify/${uniqueText}>here </a>to validate your e-mail</h2>
                `
    }
    await transporter.sendMail(mailOptions, function (error, response) {
        if (error) { console.log(error) }
        else { console.log("Message sent") }
    })
}


const usersControllers = {

    verifyEmail: async (req, res) => { //es el controlador que recibe el click del usuario en el email
        const { uniqueText } = req.params
        const user = await User.findOne({ uniqueText: uniqueText })
        if (user) {
            user.emailVerificado = true
            await user.save()
            res.redirect("http://localhost:3000/cardSignIn")
        }
        else {
            res.json({ success: false, response: "Your e-mail could not be verified" })
        }
    },

    nuevoUsuario: async (req, res) => {

        const { firstName, lastName, email, password } = req.body.NuevoUsuario // destructuring

        try {

            const usuarioExiste = await User.findOne({ email })
            console.log(req.body)
            if (usuarioExiste) {
                res.json({ success: "falseUE", response: "The user already exists, perform SignIn" })
            }

            else {
                const uniqueText = crypto.randomBytes(15).toString("hex") //texto randon de 15 caracteres hexadecimal
                const emailVerificado = false
                const passwordHash = bcryptjs.hashSync(password, 10)
                const NewUser = new User({
                    firstName,
                    lastName,
                    email,
                    password: passwordHash,
                    uniqueText, //busca la coincidencia del texto
                    emailVerificado,
                })

                if (!emailVerificado) {
                    await NewUser.save()
                    await sendEmail(email, uniqueText)
                    res.json({ success: "trueUE", response: "We have sent an e-mail to verify your e-mail address" })
                }
            }
        }

        catch (error) { res.json({ success: "falseUE", response: null, error: error }) }
    }
}

module.exports = usersControllers