//Variables
const express = require('express')
const app = express()
const porta = 3000


//Importing modules
const professoresRotas = require('./routes/professoresRoutes')

app.use(express.json())
app.use('/professores', professoresRotas)


app.listen(porta, () => console.log("Rodando na porta "+porta))

//dbConnect (database) is imported on professoresModel (table)
//which is imported in professoresControllers
//(sequelize function) which
//is imported in professoresRoutes (express verbs) that is imported in app.js
