require("dotenv").config()
const { config } = require("dotenv")
const express = require("express")  //equivalente al import de Reac, pero en Node
const app = express()
require("./config/database")

app.use(express.json()) //tramo intermedio que pasa los datos a una variable

app.listen("4000",()=> console.log("Servidor Inicializado en Puerto 4000"))