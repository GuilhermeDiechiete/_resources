const pessoa = {
    nome: 'Guilherme',
    idade: 23,
    peso: 91
}

console.log(Object.keys(pessoa)) // pega todas as chaves

console.log(Object.values(pessoa)) // pega todos os valores

console.log(Object.entries(pessoa)) // array com sub arrays com a chave e valor

// mostrando a lista
Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

// definir as propriedades
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // vai ser listada?
    writable: false, // vai ser modificada?
    value: '01/01/1999'
})

pessoa.dataNascimento = '01/01/2000'
console.log(pessoa.dataNascimento)