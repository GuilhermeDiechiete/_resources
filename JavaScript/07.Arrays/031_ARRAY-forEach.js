// ForEach -> percorrer o Array

const aprovados = ['Guilherme', 'Dhaniela', 'Antonio', 'Neusa']


// vai percorrer o array, elemento por elemento
aprovados.forEach(function(nome, indice){ // parametros (nome, indice)
    console.log(`${indice + 1}: ${nome}`)
})

aprovados.forEach(nome => console.log(nome))