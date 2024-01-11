const fs = require('fs')


// ler o diretorio e depois enviar uma callback de retorno


fs.readdir(__dirname, (err, data)=>{
    if(err) throw err

    data.forEach((files)=>{
        console.log(__dirname + files)
    })
})