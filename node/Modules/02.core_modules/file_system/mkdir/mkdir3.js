const fs = require('fs')


const diretorios = ['projeto', 'image', 'routes', 'git', 'controllers', 'views']

function make(dir){

    dir.forEach((item)=>{
        fs.mkdir(`projeto/${item}`, {recursive: true}, (err)=>{
            if(err) throw err 

            console.log('Diretorio criado com sucesso', item)
        })
    })

   

}

make(diretorios)



