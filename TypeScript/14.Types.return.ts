


// Função com tipo de retorno simples:
function adicionar(a: number, b: number): number {
    return a + b;
}

let resultado: number = adicionar(5, 3);
console.log(resultado); // Saída: 8

// Função com tipo de retorno múltiplo (união de tipos):
function dividir(dividendo: number, divisor: number): number | string {
    if (divisor === 0) {
        return "Erro: divisão por zero!";
    }
    return dividendo / divisor;
}

console.log(dividir(10, 2));  // Saída: 5
console.log(dividir(10, 0));  // Saída: Erro: divisão por zero!


// Função com tipo de retorno de objeto:
type Coordenadas = {
    x: number;
    y: number;
};

function criarCoordenadas(x: number, y: number): Coordenadas {
    return { x, y };
}

let ponto: Coordenadas = criarCoordenadas(3, 4);
console.log(ponto); // Saída: { x: 3, y: 4 }


// Função com tipo de retorno genérico:
function identidade<T>(arg: T): T {
    return arg;
}

let numero: number = identidade(5); // Tipo de retorno é 'number'
let texto: string = identidade("Olá"); // Tipo de retorno é 'string'


// Função com tipo de retorno void:
function imprimirMensagem(): void {
    console.log("Olá, mundo!");
}

imprimirMensagem(); // Saída: Olá, mundo!


// Função assíncrona com tipo de retorno usando Promise:
function retornarNumeroAsync(): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(42);
        }, 1000);
    });
}

retornarNumeroAsync().then((numero: number) => {
    console.log(numero); // Saída: 42
});
