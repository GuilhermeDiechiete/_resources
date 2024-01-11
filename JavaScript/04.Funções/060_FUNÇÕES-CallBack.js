const notas = [7.7, 5.6, 8.0, 4.5, 6.2]

// Sem CallBack
const notasBaixar1 = []
for(let i in notas){
    if (notas[i] < 7){
       notasBaixar1.push(notas[i]) 
    }
}
console.log(notasBaixar1)

// usando CallBack (com a função filter)
notasBaixar2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixar2)

// usando filter e a função arrow
const notasBaixar3 = notas.filter(nota => nota < 7)
console.log(notasBaixar3)
