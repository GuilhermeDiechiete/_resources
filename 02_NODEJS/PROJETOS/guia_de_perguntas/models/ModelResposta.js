const Sequelize = require('sequelize')
const connection = require('../db/conn')

const Resposta = connection.define('respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

// tudo que tiver aqui, vai ser criado no db
Resposta.sync({force: false})

module.exports = Resposta