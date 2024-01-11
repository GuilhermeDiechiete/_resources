const fs = require('fs')


//forma assincrona (nao bloqueante )
fs.readFile('leitura.txt', (err, data)=>{
    if(err) throw err 

    console.log('assincrona' + data.toString())
})

//forma sincrona (bloqueante) ( vai ler todo o conteudo para depois mostrar no console )
const texto = fs.readFileSync('leitura.txt')

console.log('sincrono' + texto.toString())