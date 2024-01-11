/* Função factory é utilizada para não ficar criando objetos repetidamente. 
EX:

const produto1 = {
    nome: 'Arroz',
    preço: 45
}
const produto2 = {
    nome: 'Arroz',
    preço: 45
}
*/

// FUNCTION FACTORY ( essa função sempre retorna um novo objeto, ELA É UMA FABRICA DE OBJETOS )

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva',
    }
}

console.log(criarPessoa())