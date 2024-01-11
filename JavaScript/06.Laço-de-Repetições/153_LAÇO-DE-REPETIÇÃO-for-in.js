
// percorrer um array com for in
const nomes = [ 'Guilherme', 'Dhaniela', 'Neusa', 'Antonio']

for(nome in nomes){
    console.log(nome, nomes[nome])
}


// percorrer um objeto com for in
const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Diechiete',
    idad: 23
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}


