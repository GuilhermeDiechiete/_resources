/*
Promises: Promises são uma forma mais avançada e estruturada de lidar com operações assíncronas em JavaScript. Elas permitem que você escreva código mais legível e gerencie erros de forma eficaz.
*/

function fazerAlgoAssincrono() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("A operação assíncrona foi concluída.");
        resolve();
      }, 1000);
    });
  }
  
  fazerAlgoAssincrono()
    .then(function() {
      console.log("Promise resolvida!");
    })
    .catch(function(error) {
      console.error("Erro:", error);
    });