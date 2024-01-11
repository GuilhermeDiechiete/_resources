const express = require('express') // import
const server = express() 

const path = require('path')


const port = 3000 

const users = require('./users')


server.use(
  express.urlencoded({
    extended: true,
  })
)

// toda a requisição do body é transformada em um obj
server.use(express.json())

const basePath = path.join(__dirname, 'templates')

// importa o router 

server.use('/users', users)


server.get('/', (req,res)=>{
  res.sendFile(`${basePath}/index.html`)
})


server.listen(port, ()=>{
  console.log('Servidor rodando na porta '+ port )
})

