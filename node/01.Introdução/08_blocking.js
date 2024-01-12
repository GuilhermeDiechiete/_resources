// importando file-system -> usado para manipular arquivos
const fs = require('fs')


console.log('Antes da leitura do arquivo')
console.log((process.hrtime()[0]/60).toFixed(5))

// readFile + Sync -> vai ler o arquivo como bloqueante
const dados = fs.readFileSync('leitura.txt')

console.log('Depois da leitra do arquivo')
console.log((process.hrtime()[0]/60).toFixed(5))
