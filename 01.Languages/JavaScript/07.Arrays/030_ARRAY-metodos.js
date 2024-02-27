// ARRAY -> é uma estrutura com varios elementos (valores -> esses valores podem ser de qualquer tipo, até variaveis ) que são identificados pelos seus indices

// indices           0         1        2        3    
const produtos = ['Arroz', 'Feijão', 'Massa', 'Leite' ]


console.log(produtos[2]) // ver um elemento pelo indice

//  REMOVER

// REMOVER O ULTIMO ELEMENTO
console.log(produtos.pop()) 
console.log(produtos)

// REMOVE O PRIMEIRO ELEMENTO
console.log(produtos.shift())
console.log(produtos)

// REMOVE UM ELEMENTO NO DETERMINADO INDICE
delete produtos[3] 
console.log(produtos)

// REMOVER VARIOS ELEMENTOS
produtos.splice(3, 1)


// ADICIONAR

// ADICIONA UM ELEMENTO NO FINAL
produtos.push('Nescau') // adiciona elemento no final
console.log(produtos)

// ADICIONAR UM ELEMENTO NO INICIO 
produtos.unshift('Farinha')
console.log(produtos)

// ADICIONAR UM ELEMENTO EM UM DETERMINADO INDICE
produtos[4] = 'Queijo'
console.log(produtos)

// ADICIONAR VARIOS ELEMENTOS
produtos.splice('Sorvete', 'Massa')
console.log(produtos)


// GERA UM NOVO ARRAY
const algunsProdutos = produtos.slice(2)// a partir do elemento (x)

console.log(produtos.length) // mostrar quantos elementos tem

console.log(typeof produtos) // tipo objeto