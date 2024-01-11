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