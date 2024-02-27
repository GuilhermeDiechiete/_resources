
// CRIAR UM FOREACH

Array.prototype.forEach2 = function(callB){
    for (let i = 0; i < this.length; i++)
    callB(this[i], i, this)
}


const aprovados = ['Guilherme', 'Dhaniela', 'Antonio', 'Neusa']


aprovados.forEach2(function(nome, indice){ 
    console.log(`${indice + 1}: ${nome}`)
})

