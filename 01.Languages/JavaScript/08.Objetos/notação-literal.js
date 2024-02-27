const a = 1
const b = 2
const c = 3

// se a conotação for igual
const obj1 = {a:a, b:b, c:c} // antigo
const obj2 = {a, b, c} // novo


// so usamos assim quando o nome vai ser alterado
const obj3 = {x:a, y:b, z:c} // antigo


console.log(obj1, obj2, obj3)


