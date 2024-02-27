// IMPORTAÇÕES 
const express = require('express') // servidor
const boryParser = require('body-parser') // url
const multer = require('multer') // upload de arquivos
const path = require('path') // manipular arquivos
const app = express()

// tratamento de url
app.use(boryParser.urlencoded({extended: true}))



// ARMAZENAMENTO DOS ARQUIVOS
const storage = multer.diskStorage({

    // destino (requisição, arquivo, callback)
    destination: (req, file, callB)=>{
           // erro, pastaDestino, 
        callB(null, 'uploads/')
    },
    // configuração do nome do arquivo
    filename: (req, file, callB)=>{

        const d = new Date()
        const date = `${d.getFullYear()}--${d.getHours()}:${d.getMinutes()}:${d.getMilliseconds()}`

            //erro, nomeArquivo + data-e-hora + extensão
        callB(null, file.fieldname+'-'+ date + path.extname(file.originalname))
    }
})

const upload = multer({storage})


app.get('/', (req, res)=>{
    // carregar o html na rota raiz
    res.sendFile(__dirname+'/index.html')
})

app.post('/upload', upload.single('arquivo'), (req, res, next)=>{
    const file = req.file 
    if(!file){
        const err = new Error('Selecione um arquivo valido')
        err.httpStatusCode = 400
        return next(err)
    }
    res.send(file)
    //res.end('Arquivo enviado com sucesso')
})


app.listen(3000, '127.0.0.1', ()=>{
    console.log('Server Running')
})