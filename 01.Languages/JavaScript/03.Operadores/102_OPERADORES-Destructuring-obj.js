/* 

OPERADOR DE DESESTRUTURAÇÃO ( novo recurso do ES2015 ) 

-> retira elementos ou atributos de uma estrutura, como um objeto ou array
*/


// DESESTRUTURAÇÃO COM OBJETO


const pessoa = {
    nome: 'Guilherme',
    idade: 23,
    endereço: {
        logradouro: 'Rua Osvaldo Aranha',
        numero: 1471
    }
}

// RETIRANDO ELEMENTO DO OBJETO 

const { nome, idade } = pessoa // retire { elementos } = desse objeto

console.log(nome, idade)


// PODEMOS TROCAR O NOME DAS VARIAVEIS 

// retire { elementoX : 'novoNome', elementoY : 'novoNome' } = desse Objeto
const { nome: n, idade: i} = pessoa 

console.log(n, i)


// ACESSAR POR DESESTRUTURAÇÃO UM DADO ANINHADO -> precisa saber se existe, se não vai dar erro
const { endereço: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)
