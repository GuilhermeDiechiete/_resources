const nums = [1,2,3,4,5]

// map -> é um for com proposito ( ele vai transformar algo )

// vai percorrer os elementos do array e vai executar algo com uma função, onde podemos modificar os valores
let resultado = nums.map(function(elemento){
    return elemento * 2
})

console.log(resultado)