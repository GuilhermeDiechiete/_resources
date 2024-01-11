const fs = require('fs')

fs.writeFile('arquivoCriado.txt', 'Arquivo criado com sucesso', err =>{
    if(err) throw err

    console.log('Arquivo criado com sucesso')
})