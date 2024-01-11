const express = require('express')
const router = express.Router()


// FUNÇÃO DE MIDDLEWARE EM NIVEL DE ROTA

function logReq(req, res, next){
    console.log('Executando a função Middleware para a rota usuario')
    return next()
}

// ROTAS

//  METODO GET ( acessando algo )
router.get('/', logReq, (req, res)=>{
    res.send('Accessing user!')
    
})
// PASSANDO PARAMETROS NA ROTA
router.get('/:id', (req, res)=>{
    res.send('Accessing user id: ' + req.params.id)
    
})


//  METODO POST ( passando dados )
router.post('/', (req, res)=>{
    
    // const para capiturar os dados enviados
    const recDados = `Login: ${req.body.login}\n
    Senha: ${req.body.senha}`

    res.send('Accessing user! \n' + recDados)
})

//  METODO PATCH ( alterar alguns dados )
router.patch('/', (req,res)=>{

    res.send('Acessando user via PATCH')
})

//  METODO PUT ( alterar todos os dados )
router.put('/', (req,res)=>{

    res.send('Acessando user via PUT')
})

//  METODO DELETE ( deletar dados )
router.delete('/', (req,res)=>{

    res.send('Acessando user via DELETE')
})

module.exports = router