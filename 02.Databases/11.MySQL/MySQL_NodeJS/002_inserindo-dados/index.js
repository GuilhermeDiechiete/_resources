const express = require('express')
const exphbs = require('express-handlebars') // para o html
const mysql = require('mysql') // import mysql

const app = express()

// -------------------------------------
// necessario
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())
//--------------------------------------

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// rota de post, para receber os dados do body e inserir no banco de dados

//          rota igual no action do formulario no html
app.post('/books/insertbook', (req, res)=>{

    // guardando os dados do body
    const title = req.body.title 
    const pages = req.body.pages 

    // comando para inserir os dados na tabela ( os nomes precisam ser iguais aos do banco de dados)
    const sql = `INSERT INTO books (title, pages) VALUES ('${title}','${pages}')`

    // fazendo a conexão ao banco de dados
    conn.query(sql, function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/') // se der tudo certo, redirecione para a page raiz
    })
})

// requisição para acessar a rota raiz
app.get('/', (req, res)=>{
    res.render('home')
})


// configurações de conexão para o banco de dados
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '29262926',
    database: 'db-mysql-node'
})

// conexão
conn.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log('Conectou no Mysql')
})

app.listen(3000)