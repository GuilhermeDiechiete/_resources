const express = require('express')
const router = express.Router()
const path = require('path')


const basePath = path.join(__dirname, '../templates')


router.get('/add', (req, res)=>{
  res.sendFile(`${basePath}/userform.html`)
})

router.post('/save', (req, res)=>{
  console.log(req.body)

  const name = req.body.name 
  const age = req.body.age 

  console.log(`${name} - ${ age }`)
})



// ACESSAR PARAMETROS NA URL
router.get('/:id', (req,res)=>{
  const id = req.params.id 

  // leitura da tabela users, resgatar do banco de dados 
  console.log(`Estamos buscando pelo usuário: ${id}`)
  
  res.sendFile(`${basePath}/users.html`)
})


module.exports = router
