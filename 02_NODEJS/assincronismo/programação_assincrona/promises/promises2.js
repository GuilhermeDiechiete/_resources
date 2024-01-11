/*
Promise == PROMESSA ( cumprir , não cumprir )
*/

//  email => Resolve: "enviada" || Reject: "Falha ao enviar"

function enviarEmail(corpo, para){
    
    // mesmo que -> retorna uma promise que promete algo
    return new Promise((resolve, reject) => {

        const statusEnvio = true

        setTimeout(() => {
            if(statusEnvio == true){
                resolve() // promessa ok
            } else {
                reject() // não cumpriu
            }
        }, 4000)
    } )
}

enviarEmail("Mensagem do email", "guilherme@gmail.com").then(()=> {
    console.log('O email foi enviado com sucesso')
}).catch(() => console.log('E-mail não foi enviado'))