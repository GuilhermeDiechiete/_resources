

function enviarEmail(corpo, para){
    
    return new Promise((resolve, reject) => {

        const statusEnvio = true

        setTimeout(() => {
            if(statusEnvio == true){
                resolve({tempo: 6, para: "guilherme@gmail.com"}) // apenas 1 parametro
            } else {
                reject("Falha") // apenas 1 parametro
            }
        }, 4000)
    } )
}

enviarEmail("Mensagem do email", "guilherme@gmail.com")

//then responde o resolve
.then((dados)=> { console.log(`O e-email para ${dados.para} foi enviado em ${dados.tempo} segundos.`)
})
//catch responde o reject
.catch((erro) => console.log('E-mail não foi enviado' + erro))