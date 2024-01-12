const Processor = require('./fragments/Processor')
const Reader = require('./fragments/Reader')
const Table = require('./fragments/Table')
const HtmlParser = require('./fragments/HtmlParser')
const Writer = require('./fragments/Writer')
const PDFWriter = require('./fragments/PDFWriter')

var leitor = new Reader()
var escritor = new Writer()



async function main(){
    const dados = await leitor.Read("./filesExcel/users.csv")
    const dadosProcessados = Processor.Process(dados)
    const usuarios = new Table(dadosProcessados)
    var html = await HtmlParser.Parse(usuarios)
    escritor.Write(Date.now() + ".html", html)

    
    PDFWriter.WritePDF(Date.now() + ".PDF", html)
}

main()