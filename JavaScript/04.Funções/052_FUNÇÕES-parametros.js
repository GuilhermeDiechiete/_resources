// PARAMETRO PADRÃO

// Maneiras de definir um valor padrao para cada parametro
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3))

// MANEIRA MAIS NOVA DO ES2015
function soma2(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log('Soma2  ' + soma2())




// FUNÇÕES SEM PARAMETRO, podem receber parametros depois
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1,4,6,4))