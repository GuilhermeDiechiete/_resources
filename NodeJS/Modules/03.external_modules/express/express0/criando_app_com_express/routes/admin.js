const express = require('express')
const router = express.Router()

// METODO GET
app.get('/admin', (req, res)=>{
  console.log('Resposta para ADM: Rota ADMIN foi acessada!')
  res.send('Rota /admin')
})

// METODO GET usando parametros na rota ( usar arquivo server.rest para simular)
// METODO GET
app.get('/', (req, res)=>{
  console.log('Resposta para ADM: Rota ADMIN foi acessada!')
  res.send('Rota /admin')
})

// METODO GET usando parametros na rota ( usar arquivo server.rest para simular)
app.get('/:id', (req, res)=>{
  console.log('Resposta para ADM: Rota ADMIN com ID foi acessada!')
  res.send('Acessando A rota ADMIN com o id:' + req.params.id)

})
// METODO POST -> para capturar dados
app.post('/', (req, res)=>{
  const corpo = `Login: ${req.body.login} - Senha: ${req.body.senha}`
  console.log('Resposta para ADM: Metodo post!')
  res.send('Acessando via post: ' + corpo)

})
//METODO PATCH -> alteração de dados ( pedações)
app.patch('/:id',(req,res)=> {
  res.send('Acessando a Admin via PATCH')
})

// METODO PUT -> alterar todos os dados
app.put('/:id',(req,res)=> {
  res.send('Acessando a Admin via PUT')
})

// METODO DELETE -> deletar dados 
app.delete('/:id',(req,res)=> {
  res.send('Acessando a Admin via DELETE')
})


module.exports = router
