require("dotenv").config()

const express = require("express")  //equivalente al import de Reac, pero en Node
const cors = require("cors")
const Router = require("./routes/routes")
const passport = require("passport")
const app = express()
require("./config/database")
require("./config/passport")


// MIDDLEWARES > SOFT DE SERVICIOS INTERMEDIOS QUE UTILIZA NUESTAR APP

app.use(express.json()) //tramo intermedio que pasa los datos a una variable
app.use(cors())
app.use("/api", Router)

app.use(passport.initialize())

app.listen("4000", () => console.log("Servidor Inicializado en Puerto 4000"))