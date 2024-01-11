const { writeFile } = require('fs')

function criarArquivo(nome, conteudo){
    return new Promise((resolve, reject)=>{

        writeFile(nome, conteudo, err =>{

            if(err) return reject(err)

            resolve()
        })
    })
}

criarArquivo('CriadoComPromisy.txt', 'Conteudo do arquivo')
.then(()=> console.log('Arquivo criado com sucesso'))
.catch(err => console.log(err))