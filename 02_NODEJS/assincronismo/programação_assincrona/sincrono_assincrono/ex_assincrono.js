
// setTimeout é assincrono
function enviarEmail(corpo, para){
    setTimeout(()=> {
        console.log(`Para: ${para} ----- Mensagem: ${corpo} ------ De: Guilherme`)
    },3000)
}

console.log('Vamos enviar seu e-mail!')

enviarEmail('Oi, estudando Callbacks', 'guilherme@gmail.com')

console.log('O e-mail foi enviado com sucesso, deve chegar em segundos.')
console.log('Obrigado por usar o nosso app de envio de e-mail.')
