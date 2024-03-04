// Union types (tipos de união) em TypeScript permitem que uma variável, parâmetro de função ou propriedade de objeto possa ter mais de um tipo. Isso é útil quando você precisa lidar com valores que podem ser de diferentes tipos. Aqui estão alguns exemplos:


// Union type com number e string
let idadeOuNome: number | string;

idadeOuNome = 25; // Válido
console.log(idadeOuNome); // Saída: 25

idadeOuNome = "João"; // Válido
console.log(idadeOuNome); // Saída: João


// Parâmetro de função com union type:

// Função que recebe um parâmetro que pode ser number ou string
function imprimirIdadeOuNome(valor: number | string) {
    console.log(valor);
}

imprimirIdadeOuNome(30); // Válido
// Saída: 30

imprimirIdadeOuNome("Maria"); // Válido
// Saída: Maria


// Propriedade de objeto com union type:

// Definindo um tipo com propriedade de union type
type Resultado = {
    sucesso: boolean;
    valor: number | string;
};

// Criando um objeto do tipo Resultado
let resultado1: Resultado = { sucesso: true, valor: 42 }; // Válido
console.log(resultado1.valor); // Saída: 42

let resultado2: Resultado = { sucesso: false, valor: "Erro" }; // Válido
console.log(resultado2.valor); // Saída: Erro
