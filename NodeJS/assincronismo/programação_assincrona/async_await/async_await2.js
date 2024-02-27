function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve([
                { name: "Guilherme", idade: 23},
                { name: "Antonio", idade: 50},
                { name: "Luana", idade: 28},
            ])
        },2000)
        
    })
}

async function main(){
    const usuarios = await pegarUsuarios()
    console.log(usuarios)
}
main()



