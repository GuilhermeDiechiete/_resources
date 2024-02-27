// IMPORTAÇÕES
const { DataTypes } = require('sequelize')

const db = require('../db/conn') // banco

                    //nome banco
const Task = db.define('Task', {
    
    // colunas do banco 
    title: {
        type: DataTypes.STRING,
        required: true
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        required: true
    },
})

module.exports = Task