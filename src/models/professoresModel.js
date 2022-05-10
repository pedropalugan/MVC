const Sequelize = require('sequelize')
const database = require('../config/dbConnect')

//Defining the table 'prof_info' from database dbConnect
const professores = database.define('prof_info',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: Sequelize.STRING,
    idade: Sequelize.INTEGER,  
    num_id: Sequelize.INTEGER,
    cargo: Sequelize.STRING
});

module.exports = professores