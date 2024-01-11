// Função sem retorno no JS

function calcular(n1, n2){ // bloco
    console.log(n1 + n2)
}
calcular(2,3)
calcular(2) // vai dar NaN pq não tem os dois parametros


// Função com retorno
function soma(a, b = 0){
    return a + b
}
console.log(soma(2,4))
console.log(soma(2)) // não da erro, pq o b tem um valor padrao definido -> 0