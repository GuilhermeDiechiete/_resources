// As interfaces em TypeScript são uma forma de definir contratos para objetos em termos de estrutura e comportamento. Elas são usadas para declarar tipos de forma mais flexível e expressiva. Aqui estão alguns exemplos detalhados de como você pode usar interfaces em TypeScript:


// Interface para objeto simples:

// Definindo uma interface para representar um objeto Pessoa
interface Pessoa {
    nome: string;
    idade: number;
    email?: string; // Propriedade opcional
}

// Criando um objeto do tipo Pessoa
let pessoa: Pessoa = {
    nome: "Alice",
    idade: 30,
    email: "alice@example.com"
};

console.log(pessoa.nome); // Saída: Alice
console.log(pessoa.idade); // Saída: 30
console.log(pessoa.email); // Saída: alice@example.com


// Interface para função:

// Definindo uma interface para uma função de cálculo
interface Calculo {
    (a: number, b: number): number;
}

// Implementando a função de soma conforme a interface
let soma: Calculo = function(a, b) {
    return a + b;
};

console.log(soma(5, 3)); // Saída: 8


// Interface para objetos aninhados:

// Definindo uma interface para representar um objeto Coordenada
interface Coordenada {
    x: number;
    y: number;
}

// Definindo uma interface para representar um objeto Retângulo
interface Retangulo {
    cantoSuperiorEsquerdo: Coordenada;
    largura: number;
    altura: number;
}

// Criando um objeto do tipo Retângulo
let retangulo: Retangulo = {
    cantoSuperiorEsquerdo: { x: 0, y: 0 },
    largura: 100,
    altura: 50
};


// Interface extendendo outra interface:

// Definindo uma interface base para um animal
interface Animal {
    tipo: string;
}

// Definindo uma interface para um animal com propriedades adicionais
interface AnimalDomestico extends Animal {
    nome: string;
    idade: number;
}

// Criando um objeto do tipo AnimalDomestico
let cachorro: AnimalDomestico = {
    tipo: "cachorro",
    nome: "Rex",
    idade: 3
};
