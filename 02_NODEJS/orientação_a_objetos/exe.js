class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;    // Configura o atributo "nome"
        this.idade = idade;  // Configura o atributo "idade"
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

// Criando uma instância da classe Pessoa
const pessoa1 = new Pessoa("Alice", 30);

// Acessando os atributos e chamando o método da instância
console.log("Nome:", pessoa1.nome);
console.log("Idade:", pessoa1.idade);
pessoa1.apresentar();