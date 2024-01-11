const fs = require('fs')

fs.mkdir('test-mkdir1', (err)=>{
    if(err) throw err

    console.log('Diretorio criado com sucesso!')
})