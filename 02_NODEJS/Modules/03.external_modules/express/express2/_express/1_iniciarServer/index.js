const express = require('express') // import

const server = express() // armazenamos o express com uma const server

const port = 3000 // variavel ambiente

// adicionando rotas 

//        rota,  função com req, res
server.get('/', (req,res)=>{

  // req -> é o que o usuario está mandando para o servidor, formularios...
  // res -> resposta do servidor para o usuario

  res.send('Olá')
})

server.listen(port, ()=>{
  console.log('Servidor rodando na porta '+ port )
})