// IMPORTAÇÕES 
const express = require('express') // servidor
const exphbs = require('express-handlebars') // para o html
const mysql = require('mysql') // banco de dados

const app = express()

// MIDLEWARES
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))


// ROTAS 

// ROTA RAIZ DA APLICAÇÃO
app.get('/', (req, res)=>{
    res.render('home')
})

// ROTA PARA ADICIONAR BOOKS
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

//RESGATANDO DADOS DO BANCO DE DADOS COM WHERE
app.get('/books/:id', (req,res)=>{

    const id = req.params.id 
    const sql = `SELECT * FROM books WHERE id = ${id}`
    conn.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }
        const book = data[0]
        res.render('book', { book })
    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '29262926',
    database: 'curso'
})


conn.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log('Conectou no Mysql')
})

app.listen(3000)