const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

// cada elemento do array encontrado, ele volta a função e roda ate encontrar o proximo elemento do array
fabricantes.forEach(imprimir)