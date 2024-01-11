
// exibir mensagem no console
console.log('Exibindo mensagem')

// erro
console.error(new Error('Exibindo mensagem de erro'))

// exibe em forma de tabela (array)
const nomes = ['GUilherme', 'Dhaniela', 'Antonio', 'Neusa']
console.table(nomes)

//exibe em forma de tabela (objetos)
const dados = {nome:'Guilherme', idade:23}
console.table(dados)

//conta o console
console.count('processo')
console.countReset('processo')//reseta a contagem

// mostra o inicio e o fim do tempo quando executa o console.time
console.time('tempo')
console.timeEnd('tempo')