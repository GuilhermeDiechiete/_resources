//importação de todas as funções do modulo
const calcular = require('./moduloExport')

// importação apenas de uma função 
const soma = calcular.soma


// quando importamos todas as funções precisamos colocar o nome do moculo mais o nome da função
calcular.divisao(2,2)
calcular.soma(2,2)
calcular.multiplicacao(2,2)
calcular.subtracao(2,2)

// se for importado apenas uma função em uma constante, apenas chamamos a função
soma(10, 10)