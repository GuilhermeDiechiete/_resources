const { promisify } = require('util')


// vou usar o writefile do modulo fs, mas vou carregar ele como promise, com o modulo utils do nodejs

const writefile = promisify(require('fs').writeFile)

const conteudo = 'Criando um arquivo usando o modulo util'


writefile('arquivoCriado.txt', conteudo)

    .then(()=>{ console.log('Arquivo criado com sucesso')})
    .catch(()=>{'Deu erro:' + err})
