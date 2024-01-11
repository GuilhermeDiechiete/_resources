const express = require('express') 
const server = express()

server.use(express.json()) // preciso avisar o express que ele vai receber dados em json nas rotas POST


//********************************************************* */
// SIMULAÇÃO DE UM BANCO DE DADOS 
const usuarios = [
    {_id:1, nome:'Guilherme'},
    {_id:2, nome:'Dhaniela'},
    {_id:3, nome:'Jean'},]
//********************************************************* */


// CRUD ( CREATE, READ, UPDATE, DELETE )

// READ -> GET ( resgatar todos os dados )
server.get('/users', (require, response) => {

    return response.json(usuarios)
}) 

// READ -> GET ( resgatar dados individualmente)
server.get('/users/:index', (require, response) => {

    const { index } = require.params
    return response.json(usuarios[index])
    }) 

// CREATE -> POST ( enviar dados para DB )
server.post('/users/register', (req, res) => { 

    const { _id, name} = req.body // request params
    const usuario = {_id, name}
    usuarios.push(usuario)
    res.json(usuarios)
})

// PUT -> UPDATE ( atualizar dados do DB)
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

// DELETE - DELETE ( deletar um dado do DB )
server.delete('/users/delete/:index', (req, res)=>{

    const { index } = req. params
    if(index) {
        usuarios.splice(index, 2)
    }
    return res.json({ message: 'Curso deletado com sucesso'})
})




server.listen(4000, ()=> console.log('Servidor Rodando!'))