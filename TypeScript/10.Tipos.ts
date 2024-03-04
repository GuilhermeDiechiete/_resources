


// Number
const age:number = 25
const price:number = 10.99

// String
const username:string = "Guilherme"
const message:string = 'Olá'

// Boolean
const on:boolean = true
const off:boolean = false

// Array
let numbers: number[] = [1, 2, 3, 4, 5]
let colors: string[] = ["vermelho", "azul", "verde"]

let numbers2: Array<number> = [1, 2, 3, 4, 5]
let colors2: Array<string> = ["vermelho", "azul", "verde"]

// Tuple - Representa um array com um número fixo de elementos, em que os tipos dos elementos são conhecidos.
let user: [string, number] = ["Guilherme", 24]

// enum - Permite definir um conjunto de nomes de constantes com associações de valores numéricos.
enum DiaDaSemana {
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo
}
let hoje: DiaDaSemana = DiaDaSemana.Quarta;

// any - Representa um tipo dinâmico que pode ser qualquer coisa.
let variavelQualquer: any = "qualquer coisa";
variavelQualquer = 10;
variavelQualquer = true;

