
const gulp = require('gulp') // IMPORTANDO O GULP

// destructuring
const { series, parallel } = require('gulp')
// series -> executar tarefas
// parallel -> executar tarefas em paralelo


// FUNÇÃO -> REPRESENTA UM TAREFA A SER EXECUTADA PELO GULP

// cada função que ouver no documento, o gulp vai executar, para avisar o gulp que a tarefa terminou de ser executada, precisamos retornar uma callback

const tarefa1 = callB => {
    console.log('Tarefa1 finalizada!')
    return callB()
}

const tarefa2 = callB => {
    console.log('Tarefa1 finalizada!')
    return callB()
}

function copiarPasta(callB){
    
      // src -> definir quais arquivos sera copiado
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    // copiar todos os arquivos .txt
    // gulp.src('pastaA/**/*.txt')

        .pipe(gulp.dest('pastaB')) // copiar os arquivos para um 'destino' (pastaB)
        
        // pipe -> definir qual transformação será feita nos arquivos
        
    console.log('Cópia feita com Sucesso!')
    return callB()
}

const tarefa4 = callB => {
    console.log('Tarefa1 finalizada!')
    return callB()
}



// exportando a função ( precisa colocar o default para funcionar )
module.exports.default = series(
    parallel(tarefa1,tarefa2), 
    copiarPasta,
    tarefa4 )