const http = require('http')
const fs = require('fs')

const port = 3000
const host = '127.0.0.1'
const url = `http://${host}:${port}`

let conteudo = ''

fs.readFile('index.html', (err, data)=>{
    if(err) throw err 
    conteudo = data
})




const server = http.createServer((request, response)=>{
    response.statusCode = 200

    response.setHeader('Content-Type', 'text/html')
    response.end(conteudo)
})

server.listen(port, host, ()=>{
    console.log('Servidor rodando em ' + url)
})

const open = (process.platform == 'darwin' ? 'open' : process.platform == 'win32'? 'start': 'xdg-open')

require('child_process').exec(open + ' ' + url)