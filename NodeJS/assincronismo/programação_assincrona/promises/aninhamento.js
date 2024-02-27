function pegarId(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve(4)
        },1500)
    })
}
function buscarEmailNoBanco(id){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve("guilherme@gmail.com")
        },2000)
    })
}
function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = false
            if(!deuErro){
                resolve({time: 6, to: "guilherme@gmail.com"})
            } else {
                reject('Fila cheia')
            }
        },4000)
    })
}

pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {

        enviarEmail("Ola, como vai?", email).then(() => {
            console.log('E-mail enviado com sucesso com o id ' + id)
        }).catch(err => console.log(err))
    })
})