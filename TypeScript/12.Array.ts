


// Array de números
let numeros: number[] = [1, 2, 3, 4, 5];

// Array de strings
let nomes: string[] = ["Alice", "Bob", "Carol"];

// Array de booleanos
let estados: boolean[] = [true, false, true];

// Array de tipos mistos (não recomendado, mas possível)
let misturados: (number | string)[] = [1, "dois", 3, "quatro"];


let numeros2: number[] = [1, 2, 3, 4, 5];
console.log(numeros2[0]); // Saída: 1
console.log(numeros2[2]); // Saída: 3


let numeros3: number[] = [1, 2, 3, 4, 5];
numeros[2] = 10;
console.log(numeros); // Saída: [1, 2, 10, 4, 5]


let nomes2: string[] = ["Alice", "Bob", "Carol"];
for (let nome2 of nomes2) {
    console.log(nome2);
}


let numeros4: number[] = [1, 2, 3];
numeros.push(4); // Adiciona um elemento ao final do array
console.log(numeros4); // Saída: [1, 2, 3, 4]

numeros4.pop(); // Remove o último elemento do array
console.log(numeros4); // Saída: [1, 2, 3]


let matriz: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz[0][1]); // Saída: 2
console.log(matriz[1][2]); // Saída: 6


// Outra forma de Sintaxe 
let meuArray: Array<number> = new Array<number>();

// Inicializando um array com um tamanho específico e preenchendo com um valor padrão
let arrayComTamanho = new Array<number>(5); // Array de tamanho 5 inicializado com undefined
let arrayPreenchido = new Array<number>(5).fill(0); // Array de tamanho 5 preenchido com zeros