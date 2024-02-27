function operacaoSincrona() {
    const inicio = new Date();
    for (let i = 0; i < 1000000; i++) {
      // Simule uma operação síncrona demorada
    }
    const fim = new Date();
    const tempoDecorrido = fim - inicio;
    console.log(`A operação síncrona foi concluída em ${tempoDecorrido} milissegundos.`);
  }
  
  console.log("Início da operação síncrona");
  operacaoSincrona();
  console.log("Fim da operação síncrona");