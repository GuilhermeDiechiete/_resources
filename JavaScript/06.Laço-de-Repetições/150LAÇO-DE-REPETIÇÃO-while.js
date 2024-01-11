// while -> enquanto

function confirmarSenha(senha){
    while(senha <= 10){
        console.log('Senha Invalida')
        senha++
    }
}
confirmarSenha(2)