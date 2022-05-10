const Sequelize = require('Sequelize')


//Creating pwbe_aluno database
const database = new Sequelize('pwbe_aluno', 'root','',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

module.exports = database