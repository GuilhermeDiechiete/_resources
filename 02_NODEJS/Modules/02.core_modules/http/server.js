const http = require('http')  //modulo nativo para criar servidor

const port = 3000
const host = '127.0.0.1'

url = `http://${host}:${port}`



// criar servidor
const server = http.createServer((request, response)=>{

    response.statusCode = 200

    response.setHeader('Content-Type', 'text/html')

    response.end('<h1>Bem vindo ao NodeJS</h1>')
})


// escutar servidor
server.listen(3000, host, ()=>{
    console.log('Servidor rodando!')
})

// abrir o navegador automaticamente
const open = (process.platform == 'darwin' ? 'open' : process.platform == 'win32'? 'start': 'xdg-open')

require('child_process').exec(open + ' ' + url)