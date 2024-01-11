// Objeto -> é uma coleção de valores em par ( chave : valor ) 


// CRIAR UM OBJETO VAZIO E DEPOIS ADICIONAR OS VALORES
const produtos = {} // obj vazio

// adicionando valores no onj vazio
produtos.nome = 'Celular'
produtos.preco = 2.549

console.log(produtos)


// CRIAR UM OBJETO NA FORMA LITERAL 
const produtos2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
}
console.log(produtos2)


// PODEMOS TER UM OBJ DENTRO DE OUTRO OBJ (aninhamento de obj)
const produtos3 = {
    nome: 'Camiseta',
    preco: 79.90,

    desconto: { // sub objeto
        porcentagem: 2,
    }
}
console.log(produtos3)