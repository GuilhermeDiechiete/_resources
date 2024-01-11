// INICIANDO O EXPRESS
const express = require('express')
const app = express()

// MOSTRANDO PARA O EXPRESS ONDE ESTA OS ARQUIVOS ESTATICOS
app.use(express.static('public'))

// PODEMOS DEFINIR UMA ROTA PARA O ARQUIVO ESTATICO
//app.use('nomeRota', express.static('public'))


// MIDDLEWARE DE TERCEIROS ( gravar cookies)
const cookie = require('cookie-parser')
app.use(cookie())


// variaveis que recebem o local das rotas da aplicação
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')

app.use(express.json()) // middleware -> para aceitar dados json das rotas com metodo post


// CRIANDO UM MIDDLEWARE EM NIVEL DE APLICAÇÃO

app.use((req, res, next)=>{ // next: chamamos quando o middleware terminal, para continuar a aplicação

    console.log('Executando Middleware em nivel de aplicação')

    return next() // avisando que o middleware terminou o que precisava fazer e pode seguir o fluxo da aplicação
})

// USANDO UM MIDDLEWARE DE TERCEIROS ( gravando cookies )
app.get('/setcookie', (req, res)=>{
    res.cookie('user', 'Guilherme Diechiete', {maxAge: 900000, httpOnly: true})

    res.send('Cookie foi gravado com sucesso!')
})
app.get('/getcookie', (req, res)=>{
    let user = req.cookies['user']
    if(user){
        return res.send(user)
    }
})


//  ROTA RAIZ DA APLICAÇÃO
app.get('/', (req, res)=>{
    res.send('Accessing root page!')
    
})

// MIDDLEWARE DE APLICAÇÃO -> se alguem tentar acessar a rota (x), direcione para o local da rota (y) que esta na pasta routes
app.use('/admin', adminRoutes) 
app.use('/user', userRoutes) 


// TESTE DE MIDDLEWARE DE TRATAMENTO DE ERRO
app.get('*', (req, res, next)=>{
    setImmediate(()=>{
        next( new Error('Geramos um erro para testar o middleware de tratamento de erro'))
    })
})



// MIDDLEWARE DE TRATAMENTO DE ERRO 
// sempre no final da aplicação, tem 4 parametros
app.use((err, req, res, next)=>{
    console.log(err.stack)
    res.status(500).json({message: err.message})
})


// ESCUTANDO O SERVIDOR 
app.listen(3000, ()=>{
    console.log(`Server running: http://localhost:3000`)
})