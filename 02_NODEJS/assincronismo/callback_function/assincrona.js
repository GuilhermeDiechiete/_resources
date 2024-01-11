

function soma(x, callB){
  return setTimeout(()=> {
                //err , resultado
    return callB(null, x + 5000)
  }, 3000)
}

// função de callback tem dois parametros ( erro, resultado) se tiver algo no erro, vai ser true e a aplicação vai parar com o comando throw 
function resolverSoma(err, res){
  if(err) throw err 

  console.log(res)
}

soma(200, resolverSoma)