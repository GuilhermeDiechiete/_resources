const express = require('express') // import
const path = require('path')

const server = express() 
const port = 3000 

const basePath = path.join(__dirname, 'templates')


server.get('/', (req,res)=>{
  res.sendFile(`${basePath}/pagina1.html`)
})

server.get('/produtos', (req,res)=>{
  res.sendFile(`${basePath}/produtos.html`)
})

server.listen(port, ()=>{
  console.log('Servidor rodando na porta '+ port )
})