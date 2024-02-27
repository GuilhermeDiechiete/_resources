"use strict";
// Type Numbers 
let x = 10; // JS -> let x = 10
let y = 1.00151;
console.log(x, y);
//------------------------------------------------
// Type Strings
const username = 'Guilherme';
console.log(username);
//------------------------------------------------
// Type Boolean
let nota = true; // or false
console.log(nota);
//------------------------------------------------
// Type Any - accepts any type
let description = 'Guilherme';
description = 1;
description = true;
const coisas = [1, 'Guilherme', true];
//------------------------------------------------
// Type Inference or Type Annotation
const typeAnnotation = 'Annotation'; // we note the type
let typeInference = 'Inference'; // TS defines the type automatically by the first value entered
//------------------------------------------------
// Type Array
let age = [20, 21, 22, 23, 30];
let userName = ['GUilherme', 'Antonio'];
let note = [true, false];
const expenses = ['Agua', 'Luz', 'Alimentos']; // another type of syntax
//------------------------------------------------
// Union Types - better than any
let balance = 1; // or "1"
function showBalance(balance) {
    console.log(balance);
}
showBalance(100);
showBalance("500");
let password = ['Guilherme', 24];
//------------------------------------------------
// Typed Parameters
function sum(a, b) {
    console.log(a + b);
}
sum(4, 5); // needs to be numbers and send both
//------------------------------------------------
// Typed Returns
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting('Guilherme'));
//------------------------------------------------
// Types of Objects
function passCordinates(coord) {
    console.log(coord.x, coord.y);
}
const objCoord = { x: 300, y: 80 };
passCordinates(objCoord);
//------------------------------------------------
// Optional Properties ( ? )
function showUser(name, age, sallary) {
    console.log(name, age, sallary);
}
showUser('Guilherme', 24, 2600);
showUser('Guilherme');
// Validation Optional Properties ( ? )
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return console.log(`Olá, ${firstName} ${lastName}, tudo bem? `);
    }
    return `Olá, ${firstName}, tudo bem?`;
}
//------------------------------------------------
// Literal Types - defines the values of the variable
function showPets(pets) {
    console.log(pets);
}
showPets('dog');
//------------------------------------------------
// Non-null Assertion Operator ( ! )
const p = document.getElementById('paragrafo');
console.log(p.innerText);
// Type Bigint ( receives high values ) ES2020
let n;
n = 1000n;
console.log(n);
// Type Symbol ES2020
let symbolA = Symbol('a');
console.log(symbolA);
