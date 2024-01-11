const express = require('express') // import
const path = require('path')

const server = express() 
const port = 3000 

const basePath = path.join(__dirname, 'templates')

server.get('/users/:id', (req,res)=>{
  const id = req.params.id 

  // leitura da tabela users, resgatar do banco de dados 

  console.log(`Estamos buscando pelo usuário: ${id}`)
  
  res.sendFile(`${basePath}/users.html`)
})

server.get('/', (req,res)=>{
  res.sendFile(`${basePath}/index.html`)
})



server.listen(port, ()=>{
  console.log('Servidor rodando na porta '+ port )
})