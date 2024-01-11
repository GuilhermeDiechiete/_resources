const url = require('url')
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'

const parsedUrl = new url.URL(address)


// podemos manipular ou retirar pedaços da url para utilizar, como saber qual produto esta sendo buscado na url
console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtos'))
