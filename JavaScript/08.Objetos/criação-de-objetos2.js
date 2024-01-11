// 01 - criando objeto usando a notação literal

const obj1 = {}
console.log(obj1)

// 02 - criando com a função contrututora new Object
const obj2 = new Object
console.log(obj2)


// 03 - Funções Contrutoras 
function Produto(nome, preço, desc){
    this.nome = nome // this -> deixa o atributo publico (global)
    this.getPreçoComDesconto = ()=>{
        return preço * (1 - desc)
    }
}
const prod1 = new Produto('Caneta', 7.99, 0.15)
const prod2 = new Produto('Notebook', 3000.20, 0.25)
console.log(prod1.getPreçoComDesconto(), prod2.getPreçoComDesconto())


// 04 - Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const func1 = criarFuncionario('Joao', 2000, 4)
console.log(func1.getSalario())


// 05 - Object.create

const filha = Object.create(null)
filha.nome = 'Dhaniela'
console.log(filha)


// função que retorna um Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON}')// converte string -> obj
console.log(fromJSON.info)

// Object em JS
console.log(typeof Object, typeof new Object)