const express = require('express') 
const server = express()





// ROTAS 

// FAZER A REQUISIÇÃO PELO POSTMAN
server.get('/user/:id', (require, response) => {

    const id = require.params.id
    return response.json(id)
    
}) // caminho -> http://localhost:4000/user/2




server.listen(4000, ()=> console.log('Servidor Rodando!'))