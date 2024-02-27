const express = require('express') // import
const path = require('path')

const server = express() 
const port = 3000 

const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next){
  req.authStatus = true

  if(req.authStatus){
    console.log('Está logado')
    next() // vai para a proxima etapa
  } else {
    console.log('Não está logado')
    next() // mando para alguma pagina se o usuario nao tem acesso
  }
}

server.use(checkAuth)

server.get('/', (req,res)=>{
  res.sendFile(`${basePath}/pagina1.html`)
})

server.get('/produtos', (req,res)=>{
  res.sendFile(`${basePath}/produtos.html`)
})

server.listen(port, ()=>{
  console.log('Servidor rodando na porta '+ port )
})