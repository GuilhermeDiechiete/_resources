
// Objeto com tipos explícitos:

// Definindo um tipo para o objeto Pessoa
type Pessoa = {
    nome: string;
    idade: number;
    email: string;
};

// Criando um objeto do tipo Pessoa
let pessoa: Pessoa = {
    nome: "Alice",
    idade: 30,
    email: "alice@example.com"
};

console.log(pessoa.nome); // Saída: Alice
console.log(pessoa.idade); // Saída: 30
console.log(pessoa.email); // Saída: alice@example.com

// Objeto com tipos inferidos:

// Criando um objeto sem especificar explicitamente o tipo
let usuario = {
    nome: "Bob",
    idade: 25,
    email: "bob@example.com"
};

console.log(usuario.nome); // Saída: Bob
console.log(usuario.idade); // Saída: 25
console.log(usuario.email); // Saída: bob@example.com
