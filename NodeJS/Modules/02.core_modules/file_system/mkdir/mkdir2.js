const fs = require('fs')

fs.mkdir('test_mkdir2/subdir1/subdir2', {recursive: true}, (err)=>{
    if(err) throw err

    console.log('Diretorio criado com sucesso!')
})