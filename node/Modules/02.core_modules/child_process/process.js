//executar em segundo plano

const { spawn } = require('child_process')

const ls = spawn('ls')

//stdout - monitorar o evento
//
//

ls.stdout.on('data', (data)=>{
    console.log(`stdout: ${data}`)
})

ls.stderr.on('data', (data)=>{
    console.log(`stderr: ${data}`)
})

ls.on('close', (data)=>{
    console.log(`processo em segundo plano executado com sucesso`)
})