// Tratamento Try - Catch - Throw


// geralmente é feito uma função com a mensagem de erro
function respostaErros(){
    throw new Error('Lamento, ocorreu um erro no Servidor')
}


function imprimirTexto(obj){
    try { // tentar
       console.log(obj.name.toUpperCase() + '!!!') 
    } catch (e){ // se o ciodigo nao rodar, vai cair para esse bloco e mostrar a msg
        respostaErros()
    }
    
}
const obj = {nome: 'Guilherme'}

imprimirTexto(obj)