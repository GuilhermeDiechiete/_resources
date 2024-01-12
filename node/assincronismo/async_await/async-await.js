// mais elegante para se trabalhar com promises

function sum(x){
  return new Promise((resolve, reject)=>{
    if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
      reject('É permitido apenas numeros!')
    }
    setTimeout(()=> {
      resolve(x + 5000)
    }, 3000)
  })
}

async function main(){
  try {
    const resultado = await sum('abc')
    console.log(`Resultado com Async Await: ${resultado}`)

  } catch (error) {
    console.log(`Temos problemas: ${error}`)
  }
}

main()