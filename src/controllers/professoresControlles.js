const Sequelize = require('sequelize')


const database = require('../config/dbConnect')
const professores = require('../models/professoresModel')

//Creating the functions to make queries on the DATABASE
class ControllersProfessores{
    static async pegarDados(req, res){
        await database.sync()
        let requisition = await professores.findAll({raw:true})
        res.send(requisition)
    }
    static async pegarDadoId(req, res){
        await database.sync()
        let index = req.params.id
        let requisition = await professores.findByPk(index, {raw:true})
        res.send(requisition)
    }
    static async addDado(req, res){
        let dadoAdd = req.body
        await database.sync()
        let request = await professores.create(dadoAdd)
        res.send("Dado adicionado")
    }
    static async deletarDado(req, res){
        let index = req.params.id
        await database.sync()
        let request = await professores.destroy({where:{id:index}})
        res.send('Dado removido')
    }
    static async editarDado(req, res){
        let index = req.params.id 
        let content = req.body
        await database.sync()
        const request = professores.update(
            content,{where: {id:index}}
        );
        res.send("Dado atualizado")
    }
}
module.exports = ControllersProfessores
