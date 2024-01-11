const numeros = [1,2,3,4,5,6,7,8,9,10]

for (n in numeros){
    if(n == 5){
        break
        // quando ele entrar no bloco, vai executar e sair
    }
    console.log(`${n} =  ${numeros[n]}`)
}


// ----------------------------------------------------------

for (num in numeros){
    if(num == 5){
        console.log('----------')
        // o continue ele executa o bloco e continua os outros blocos
        continue
    }
    console.log(`${num} = ${numeros[num]}`)
}