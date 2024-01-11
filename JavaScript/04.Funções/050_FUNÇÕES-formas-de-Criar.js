// FUNÇÃO -> presidente do pais

// CRIAR DE FORMA LITERAL
function fun1() { }

// ARMAZENAR UMA FUNÇÃO EM UMA VARIAVEL
const fun2 = function() { }

// ARMAZENAR FUNÇÕES EM UM ARRAY
const array = [ function(a,b){ return a + b }, fun1, fun2]
console.log(array[0](2,3))

// ARMAZENAR EM UM ATRIBUTO DE UM OBJETO
const obj = {}
obj.falar = function(){ return 'Opa!'}
console.log(obj.falar())

// PASSAR UMA FUNÇÃO COMO PARAMETRO
function run(função){
    função()
}
run(function(){ console.log('Executando...')})

// UMA FUNÇÃO PODE RETORNAR/CONTER UMA OUTRA FUNÇÃO
function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2,3)(4)