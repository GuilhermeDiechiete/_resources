const express = require('express') // import
const path = require('path')

const server = express() 
const port = 3000 


server.use(
  express.urlencoded({
    extended: true,
  })
)
// toda a requisição do body é transformada em um obj
server.use(express.json())

const basePath = path.join(__dirname, 'templates')


server.get('/users/add', (req, res)=>{
  res.sendFile(`${basePath}/userform.html`)
})

server.post('/users/save', (req, res)=>{
  console.log(req.body)

  const name = req.body.name 
  const age = req.body.age 

  console.log(`${name} - ${ age }`)
})



// ACESSAR PARAMETROS NA URL
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

