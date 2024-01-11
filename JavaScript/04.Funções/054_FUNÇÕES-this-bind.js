// this é usado para acessar valores do bloco maior da aplicação.

const calculo = { // bloco pai
    n1: 1,
    soma(){ // bloco filho -> usando this no bloco filho, temos acesso aos valores do bloco pai
        console.log(this.n1 + 10)
    }
}
calculo.soma()

// USANDO BIND -> amarra o objeto a o this 

const mostrarCalculo = calculo.soma.bind(calculo)
mostrarCalculo()