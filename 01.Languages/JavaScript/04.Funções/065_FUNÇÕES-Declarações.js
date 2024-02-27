
console.log(soma(2,3))
// forma tradicional ( function declaration)(consigo chamar antes de declarar essa função)
function soma(x, y){
    return x +  y
}


// function expression ( uma função dentro de uma variavel)
const subtração = function (x, y){
    return x - y
}
console.log(subtração(2,3))


// named function expression ( tem o nome da função declarada)
const mult = function mult(x, y){
    return x * y
}
console.log(mult(2,3))