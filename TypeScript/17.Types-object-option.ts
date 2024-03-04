

// Definindo um tipo para o objeto Pessoa com propriedades opcionais
type Pessoa1 = {
    nome: string;
    idade: number;
    email?: string; // Propriedade opcional
};

// Criando um objeto do tipo Pessoa com propriedade opcional
let pessoa0: Pessoa1 = {
    nome: "Alice",
    idade: 30,
    email: "alice@example.com"
};

let pessoa9: Pessoa1 = {
    nome: "Bob",
    idade: 25
};

console.log(pessoa0.nome); // Saída: Alice
console.log(pessoa0.idade); // Saída: 30
console.log(pessoa0.email); // Saída: alice@example.com

console.log(pessoa9.nome); // Saída: Bob
console.log(pessoa9.idade); // Saída: 25
console.log(pessoa9.email); // Saída: undefined
