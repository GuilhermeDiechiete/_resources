
// CONECTANDO USANDO O MONGOOSE

const mongoose = require('mongoose') // importação


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/testemongoose')
    console.log('-----Conectou ao Mongoose-----')
}

main().catch((err)=> console.log(err)) // chamando a função e tratando erro

module.exports = mongoose //exportação