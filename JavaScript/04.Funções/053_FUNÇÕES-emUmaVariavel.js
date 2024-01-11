// Armazenando uma função dentro de uma variavel

const soma = function(n1, n2){
    console.log(n1 + n2)
}
soma(2,4)

// Armazenando uma função arrow em uma variavel

const soma2 = (a, b) => { return a + b}
console.log(soma2(3,7))

// retorno implicito em uma arrow funcion
const subtração = (a, b) => a - b
console.log(subtração(2,3))