// função sincrona ( demora de mais ( pegar algo do banco de dados ), da erro para executar outras funções que vao utlizar os dados de uma função sincrona )

function soma(x){
  return setTimeout(()=> {
    x + 5000
  }, 3000)
}

function escreve(){
  console.log('Executando Função escreve ' + soma(270))
}

escreve()

console.log(soma(270))