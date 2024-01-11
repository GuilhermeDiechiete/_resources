function operacaoAssincrona(callback) {
    const inicio = new Date();
  
    setTimeout(function () {
      const fim = new Date();
      const tempoDecorrido = fim - inicio;
      console.log(`A operação assíncrona foi concluída após ${tempoDecorrido} milissegundos.`);
      callback();
    }, 2000); // Aguarde 2 segundos antes de executar o callback
  }
  
  console.log("Início da operação assíncrona");
  operacaoAssincrona(function () {
    console.log("Fim da operação assíncrona");
  });
  console.log("Continuando o código...");