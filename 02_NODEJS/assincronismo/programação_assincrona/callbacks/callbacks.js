/*
Callbacks: Os callbacks são funções que são passadas como argumentos para outras funções e são executadas quando uma determinada operação assíncrona é concluída. Eles são amplamente utilizados em JavaScript.

*/

// setTimeout é assincrono
function enviarEmail(corpo, para, callB){
  setTimeout(()=> {
      const pessoas = 5
      const status = "ENVIADOS"

      callB(pessoas, status)
  },3000)
}

console.log('Estamos enviando seu e-mail!')

enviarEmail('Oi, estudando Callbacks', 'guilherme@gmail.com', (pessoas, status)=> {
  console.log('O e-mail foi enviado com sucesso, deve chegar em segundos!')
  console.log('Obrigado por usar o nosso app de envio de e-mail.')
  console.log(`O e-mails foram ${status} para ${pessoas} pessoas com`)
})

