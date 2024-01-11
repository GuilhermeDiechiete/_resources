const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)// acessar o prototype do objeto

console.log(ferrari.__proto__ === Object.prototype)// true
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)