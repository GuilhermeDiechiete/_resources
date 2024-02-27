// mais comum -> para a execução
//throw new Error('Ah não, deu erro, na minha maquina funciona!!!')


function execute(){
  executeTo()
}

function executeTo(){
  throw new Error('Ah não, deu erro, na minha maquina funciona!!!')
}

function init(){
  // try -> tente executar alguma coisa, se der erro execute o catch automaticamente -> nao para a execução
  try {
    execute()
  } catch (error){
    console.log('Temos um problema!')
  }
}

init()
console.log('Depois do erro')