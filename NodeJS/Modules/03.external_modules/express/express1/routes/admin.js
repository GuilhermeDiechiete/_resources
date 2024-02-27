const express = require('express')
const router = express.Router()


// ROTAS

//  METODO GET ( acessando algo )
router.get('/', (req, res)=>{
    res.send('Accessing admin!')
    
})
// PASSANDO PARAMETROS NA ROTA
router.get('/:id', (req, res)=>{
    res.send('Accessing admin id: ' + req.params.id)
    
})


//  METODO POST ( passando dados )
router.post('/', (req, res)=>{
    
    // const para capiturar os dados enviados
    const recDados = `Login: ${req.body.login}\n
    Senha: ${req.body.senha}`

    res.send('Accessing admin! \n' + recDados)
})

//  METODO PATCH ( alterar alguns dados )
router.patch('/', (req,res)=>{

    res.send('Acessando admin via PATCH')
})

//  METODO PUT ( alterar todos os dados )
router.put('/', (req,res)=>{

    res.send('Acessando admin via PUT')
})

//  METODO DELETE ( deletar dados )
router.delete('/', (req,res)=>{

    res.send('Acessando admin via DELETE')
})

module.exports = router