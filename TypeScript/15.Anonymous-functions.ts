
// Definindo uma função anônima e atribuindo-a a uma variável
let quadrado = function(x: number): number {
    return x * x;
};

// Chamando a função e atribuindo o resultado a uma variável
let resultado = quadrado(5); // resultado será 25
console.log(resultado); // Saída: 25



// Função anônima como argumento de outra função:

// Definindo uma função que recebe uma função como argumento
function executarOperacao(a: number, b: number, operacao: (x: number, y: number) => number): number {
    return operacao(a, b);
}

// Chamando a função com uma função anônima como argumento
let resultadoSoma = executarOperacao(5, 3, function(x, y) {
    return x + y;
}); // resultadoSoma será 8
console.log(resultadoSoma); // Saída: 8

let resultadoMultiplicacao = executarOperacao(5, 3, function(x, y) {
    return x * y;
}); // resultadoMultiplicacao será 15
console.log(resultadoMultiplicacao); // Saída: 15
