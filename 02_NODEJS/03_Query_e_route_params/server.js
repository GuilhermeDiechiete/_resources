const express = require('express') 
const server = express()

/* 
    Query params -> ?nome=NodeJS
    Route Params -> /curso/2
    Request Body -> { nome: 'Nodejs', tipo: 'Backend' }
*/



// ROTAS 


server.get('/user', (require, response) => {

    const nome = require.query.nome 
    return response.send(nome)

}) // caminho -> http://localhost:4000/user?nome=Guilherme


server.get('/user/:id', (require, response) => {

    const id = require.params.id
    return response.send(id)
    
}) // caminho -> http://localhost:4000/user/2




server.listen(4000, ()=> console.log('Servidor Rodando!'))