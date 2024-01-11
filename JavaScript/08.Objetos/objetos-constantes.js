// pessoa -> aponta -> endereço -> {memoria}

const pessoa = {nome: "João"}
pessoa.nome = "Pedro"

console.log(pessoa)

// pode alterar o valor, não o objeto, como:

pessoa = { nome: "Ana" }


Object.freeze(pessoa) // congelar o objeto, não altera mais o valor depois dessa linha