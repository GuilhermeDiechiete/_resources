
// Type Numbers 

let x:number = 10;  // JS -> let x = 10
let y:number = 1.00151
console.log(x,y)
//------------------------------------------------


// Type Strings

const username:string = 'Guilherme'
console.log(username)
//------------------------------------------------


// Type Boolean

let nota:boolean = true // or false
console.log(nota)
//------------------------------------------------


// Type Any - accepts any type

let description:any = 'Guilherme'
description = 1
description = true 
const coisas: Array<any> = [1, 'Guilherme', true]
//------------------------------------------------


// Type Inference or Type Annotation

const typeAnnotation: string = 'Annotation' // we note the type
let typeInference = 'Inference' // TS defines the type automatically by the first value entered
//------------------------------------------------


// Type Array

let age: number[] = [20, 21, 22, 23, 30]
let userName: string[] = ['GUilherme', 'Antonio']
let note: boolean[] = [true, false]

const expenses:Array<string> = ['Agua', 'Luz', 'Alimentos'] // another type of syntax

 

//------------------------------------------------


// Union Types - better than any

let balance: string | number = 1 // or "1"

function showBalance(balance: string | number ) {
    console.log(balance)
}
showBalance(100)
showBalance("500")

let password: Array<number | string> = ['Guilherme', 24]
//------------------------------------------------


// Type Alias ( create type )

type ID = string | number // agora temos um tipo ID que aceita string e number
//------------------------------------------------


// Typed Parameters

function sum(a:number, b:number) {
    console.log( a + b )
}
sum(4,5) // needs to be numbers and send both
//------------------------------------------------


// Typed Returns

function greeting(name: string): string { // defines the return data type
    return `Olá ${name}`
}
console.log(greeting('Guilherme'))
//------------------------------------------------


// Types of Objects

function passCordinates(coord: {x:number, y:number }) {
    console.log(coord.x, coord.y)
}
const objCoord = {x:300, y:80}
passCordinates(objCoord)
//------------------------------------------------


// Optional Properties ( ? )

function showUser(name: string, age?: number, sallary?: number) {
    console.log(name, age, sallary)
}
showUser('Guilherme', 24, 2600)
showUser('Guilherme')

// Validation Optional Properties ( ? )
function advancedGreeting(firstName?: string, lastName?: string) {

    if(lastName !== undefined) {
        return console.log(`Olá, ${firstName} ${lastName}, tudo bem? `)
    }
    return `Olá, ${ firstName}, tudo bem?`
}
//------------------------------------------------


// Literal Types - defines the values of the variable

function showPets(pets: "dog" | 'cat' | 'zebra') {
    console.log(pets)
}
showPets('dog') 
//------------------------------------------------


// Non-null Assertion Operator ( ! )

const p = document.getElementById('paragrafo')
console.log(p!.innerText)


// Type Bigint ( receives high values ) ES2020

let n: bigint
n = 1000n
console.log(n)


// Type Symbol ES2020
let symbolA:symbol = Symbol('a')
console.log(symbolA)


