// DESESTRUTURAÇÃO COM ARRAY


// atribuir valor em uma variavel de um array
const [pessoa] = ['Guilherme']
console.log(pessoa)


// adicionar valores em variaveis de array
const [nome, sobrenome, idade] = ['Guilherme', 'Diechiete', 23]
console.log(nome, sobrenome, idade)

// podemos criar array ignorando valores de elementos
const [, [, nota]] = [[,8,8] , [9,5,7]]
console.log(nota) // nao usar, dificil leitura