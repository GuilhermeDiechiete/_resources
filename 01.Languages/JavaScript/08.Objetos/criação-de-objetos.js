
// criação de um objeto
const produto = new Object 

// adicionar valores
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preço = 220

console.log(produto)



// deletar valores

delete produto.preço
delete produto['marca do produto']

console.log(produto)


// OBJETO MAIS COMPLEXO 
const carro = {
    modelo: 'Focus', // valor normal(chave:valor)
    valor: 40000,
    proprietario: { // sub objeto
        nome:'Guilherme',
        idade: 23,
        endereço: { // sub objeto
            logradouro: 'Osvaldo Aranha',
            numero: 1471
        }
    },
    condutores: [{ // array de objetos
        nome: 'Dhaniela',
        idade: 24,
    },
    {
        nome: 'Antonio',
        idade: 63
    }],

    calcularValorSeguro: function(){ // função
        //...
    }
} 

// acessando objeto com a notação (.)
carro.proprietario.endereço.numero = 1000

// outra forma de acessar -> mais trabalhosa
carro['proprietario']['endereço']['logradouro'] = 'Av Gigante'


// deletar ( tudo que está a baixo, será excluido)

delete carro.condutores