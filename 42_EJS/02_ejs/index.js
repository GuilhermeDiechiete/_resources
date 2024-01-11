const express = require('express')
const app = express()

const ejs = require('ejs')

// Express vai usar o EJS como View Engine (arquivos devem estar na pasta (views))
app.set('view engine', 'ejs')
app.use(express.static('public'))// definir para o express onde está os arquivos

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/perfil/:nome/:lang', (req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    var mensagem = false
    var produtos = [
        {nome:'Arroz', preco: 14},
        {nome:'Feijão', preco: 16},
    ]

    res.render('users/perfil', {
        nome: nome,
        lang: lang,
        msg : mensagem,
        produtos: produtos
    })
})

app.listen(3333, () => console.log('Servidor Executando...'))