const express = require('express') 
const server = express()

server.use(express.json()) 

//********************************************************* */
// SIMULAÇÃO DE UM BANCO DE DADOS 
const usuarios = [
    {_id:1, nome:'Guilherme'},
    {_id:2, nome:'Dhaniela'},
    {_id:3, nome:'Jean'},]
//****************************************************** */

// next() -> usado para seguir o fluxo da aplicação depois de executar o middleware 

// MIDDLEWARE GLOBAL
server.use((req, res, next)=>{
    console.log('Middleware chamado!')

    return next() // seguir o fluxo
})

// MIDDLEWARE LOCAL
function checkUser(req, res, next){
    const { name } = req.body 

    if(!name){
        return res.status(400).json({message:'Nome Obrigatorio!'})
    }
    return next()
}



server.get('/users', (require, response) => {
    return response.json(usuarios)
}) 
server.get('/users/:index', (require, response) => {

    const { index } = require.params
    return response.json(usuarios[index])
    }) 



// middleware vai depois da rota, ele executa antes de seguir a callback da rota 
server.post('/users/register', checkUser, (req, res) => { 

    const { _id, name} = req.body 
    const usuario = {_id, name}
    usuarios.push(usuario)
    res.json(usuarios)
})
server.put('/users/update/:index', (req, res)=>{
    
    const { index } = req.params 
    const { _id } = req.body 
    const { name } = req.body 

    if(name){
        const usuario = { _id:index, nome:name}
        usuarios[index] = usuario
    } else{
        console.log('Usuario não existe')
    }
    return res.json(usuarios)
})
server.delete('/users/delete/:index', (req, res)=>{

    const { index } = req. params
    if(index) {
        usuarios.splice(index, 2)
    }
    return res.json({ message: 'Curso deletado com sucesso'})
})




server.listen(4000, ()=> console.log('Servidor Rodando!'))