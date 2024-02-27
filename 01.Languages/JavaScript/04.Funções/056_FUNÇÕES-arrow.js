let dobro = function(a){
    return 2 * a
}

// podemos deixar implicito a palavra function
dobro = (a) => { // se tiver o bloco, o return é obrigatório
    return 2 * a
}

// tirar os parenteses se ouver apenas um parametro 
// quando so temos uma função de uma linha, podemos tirar os {} e o retorno é implicito
dobro = a => 2 * a 

//-----------------------------------------------------

let ola = function (){// com bloco o return é obrigatório
    return 'Olá'
}

ola = () => 'Olá'

ola = _ => 'Olá' // possui um parametro msm sem ()