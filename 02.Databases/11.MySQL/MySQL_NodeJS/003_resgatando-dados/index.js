const express = require('express')
const exphbs = require('express-handlebars') // para o html
const mysql = require('mysql') // import mysql

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))


app.post('/books/insertbook', (req, res)=>{
    const title = req.body.title 
    const pages = req.body.pages 
    const sql = `INSERT INTO books (title, pages) VALUES ('${title}','${pages}')`

    conn.query(sql, function(err){
        if(err){
            console.log(err)
        }
        res.redirect('/') 
    })
})

app.get('/', (req, res)=>{
    res.render('home')
})

// RESGATANDO DADOS DO BANCO DE DADOS

app.get('/books', (req, res)=>{
    const sql = "SELECT * FROM books"

    conn.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }
        const books = data
        console.log(books)
        res.render('books', {books})
    })
})






const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '29262926',
    database: 'db-mysql-node'
})


conn.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log('Conectou no Mysql')
})

app.listen(3000)