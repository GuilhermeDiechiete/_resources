/*
Async/Await: A sintaxe async/await é uma maneira mais recente e limpa de lidar com código assíncrono em JavaScript. Ela é construída sobre Promises e torna o código mais legível.
*/

async function fazerAlgoAssincrono() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("A operação assíncrona foi concluída.");
  }
  
  async function main() {
    try {
      await fazerAlgoAssincrono();
      console.log("Async/Await concluído.");
    } catch (error) {
      console.error("Erro:", error);
    }
  }
  
  main();

/*
Event Loop: O Event Loop é o mecanismo que permite que o JavaScript seja assíncrono. Ele gerencia a fila de tarefas e garante que as funções assíncronas sejam executadas quando os recursos estiverem disponíveis.
Certifique-se de praticar esses conceitos e experimentar com código assíncrono em JavaScript para ter uma compreensão sólida desse aspecto importante da linguagem. É muito útil para construir aplicativos web modernos, especialmente quando você precisa lidar com operações de E/S, como chamadas de API, manipulação de DOM e muito mais.
*/