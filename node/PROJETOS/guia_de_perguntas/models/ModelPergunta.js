const Sequelize = require('sequelize')
const connection = require('../db/conn')

const Pergunta = connection.define('pergunta', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
})

// tudo que tiver aqui, vai ser criado no db
Pergunta.sync({force: false}).then(()=>{})

module.exports = Pergunta