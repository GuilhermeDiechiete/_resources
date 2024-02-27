// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manupular variaveis externas a função

// contexto lexico em ação!

const x = 'Global'

function fora(){
    const x = 'Local'
    // essa função foi declarada dentro de outra função, então ela vai pegar o valor que esta na area geral, onde a função de dentro está
    function dentro(){
        return x
    }
    return dentro
}

const minhaFunção = fora()
console.log(minhaFunção())