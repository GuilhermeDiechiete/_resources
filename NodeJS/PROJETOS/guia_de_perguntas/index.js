const express = require('express')
const app = express()
const bodyParser = require('body-parser') // traduzir os dados do formulario em OBj
const connection = require('./db/conn')
const perguntaModel = require('./models/ModelPergunta')
const respostaModel = require('./models/ModelResposta')
//Database
connection.authenticate()
    .then(()=>{ console.log('Conectou ao Banco de dados')})
    .catch((err) => {console.log(err)})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) // ler dados de formulario em json ( API )

app.get('/', (req, res) => {
    // SELECT * ALL FROM pergunta
    perguntaModel.findAll({raw: true, order:[
        ['id', 'DESC'] // ASC -> crescente  DESC -> decrescente
    ]}).then(pergunta => {
        res.render('index', {
            pergunta: pergunta
        })
    })
     
    
})
app.get('/perguntas', (req, res) => {
    res.render('perguntas')
})
app.post('/salvarperguntas', (req, res) => {
    var titulo = req.body.titulo 
    var descricao = req.body.descricao

    // INSERT INTO perguntas 
    perguntaModel.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect('/')
    })

})
app.get('/pergunta/:id', (req, res)=>{
    var id = req.params.id 
    perguntaModel.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){
            respostaModel.findAll({
                where: { perguntaId: pergunta.id},
                order: [['id','DESC']]
            }).then(respostas =>{
                res.render('pergunta', {
                    pergunta: pergunta, 
                    respostas : respostas
                })
            })

            
        }else{
            res.redirect('/')
        }
    })
})
app.post('/responder', (req, res) => {
    var corpo = req.body.corpo 
    var perguntaId = req.body.pergunta 

    respostaModel.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(()=> {
        res.redirect(`/pergunta/${perguntaId}`)
    })
})


app.listen(3333, () => console.log('Servidor Executando...'))

