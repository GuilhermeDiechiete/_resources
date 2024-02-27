const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('node-mvc', 'root', '29262926', {
    host: 'localhost',
    dialect:'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conectou ao Banco de Dados')

} catch(error){
    console.log('Não foi possivel conectar ao banco de dados')
}

module.exports = sequelize