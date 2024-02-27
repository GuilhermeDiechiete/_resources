// string - uma cadeia de caracter

let nome = 'Guilherme'
let sobrenome = "Diechiete"

console.log(nome.charAt(4))// mostra a letra que esta no indice

console.log(nome.charCodeAt(3))// pega o valor na tabela ascii

console.log(nome.indexOf('G')) // saber qual indice representa o caracter

console.log(nome.substring(2)) // começa no indice selecionado

console.log(nome.substring(0, 3)) // começa e termina

console.log(nome.replace(3, 'e')) // substituir caracter

console.log('Ana,Maria,Pedro'.split(',')) // separa os caracteres e cria um array