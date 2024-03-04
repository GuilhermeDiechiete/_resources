
const addUser = async (name: string, password: number, rule: boolean) => {
    console.log(name, password, rule)
}


// Parâmetros com tipos de objetos:
type Pessoa = {
    nome: string;
    idade: number;
};

function saudarPessoa(pessoa: Pessoa) {
    console.log("Olá, " + pessoa.nome + "! Você tem " + pessoa.idade + " anos.");
}

saudarPessoa({ nome: "Maria", idade: 35 }); // Saída: Olá, Maria! Você tem 35 anos.


// Parametros opcionais: ?
function calcularArea(base: number, altura?: number) {
    if (altura) {
        console.log("Área do retângulo: " + (base * altura));
    } else {
        console.log("Área do quadrado: " + (base * base));
    }
}

calcularArea(5);          // Saída: Área do quadrado: 25
calcularArea(5, 10);      // Saída: Área do retângulo: 50
