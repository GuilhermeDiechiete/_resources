const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get("/dashboard", (req, res)=>{
  res.render('dashboard')
})

app.get('/', (req, res)=>{

  const user = {
    name: "Guilherme",
    surname: "Diechiete",
    age: 23
  }

  const teste = 'Valor de uma variavel'

  // true ou false ( representa se o usuario esta logado ou nao)
  const autorizacao = true

  res.render('home', { user:user, teste, autorizacao})
})

app.listen(3000, ()=>{
  console.log('App rodando!!')
})