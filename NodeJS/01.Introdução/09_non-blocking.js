// importando file-system -> usado para manipular arquivos
const fs = require('fs')


console.log('Antes da leitura do arquivo')
console.log((process.hrtime()[0]/60).toFixed(5))

// readFile -> vai ler o arquivo sem bloqueio, quando é nao bloqueante precisa passar uma arrow function junto

const dados = fs.readFile('leitura.txt',(err, data)=>{
    if(err) throw err
})

console.log('Depois da leitra do arquivo')
console.log((process.hrtime()[0]/60).toFixed(5))
