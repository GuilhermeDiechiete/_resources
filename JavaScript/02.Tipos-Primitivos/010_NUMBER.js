const n1 = 1.0
const n2 = Number('2.0')

console.log(n1, n2)

// ver se é um numero inteiro 
console.log(Number.isInteger(n1))
console.log(Number.isInteger(n2))


const nota1 = 9.871
const nota2 = 6.871

const total = nota1 * n1 + nota2 * n2
const media = total / (n1 + n2)

//fixar casas depois do ponto
console.log(media.toFixed(2))

// mudar para valor binario
console.log(media.toString(2))

// saber o tipo de dado
console.log(typeof media)

