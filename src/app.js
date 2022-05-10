//Variables
const express = require('express')
const app = express()
const porta = 3000


//Importing modules
const professoresRotas = require('./routes/professoresRoutes')

app.use(express.json())
app.use('/professores', professoresRotas)


app.listen(porta, () => console.log("Rodando na porta "+porta))

//dbConnect is imported on professoresModel which is imported in professoresControllers which
//is imported in professoresRoutes that is imported in app.js