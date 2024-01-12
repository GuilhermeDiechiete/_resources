// CONVERTER CODIGO TYPESCRIPT PARA CODIGO JAVASCRIPT

const gulp = require('gulp')
const { series } = require('gulp')
const ts = require('gulp-typescript')

// arquivo de configuração do typescript
const tsProject = ts.createProject('tsconfig.json')


function transformacaoTS(){

    return tsProject.src() // ja esta definido no arquivo de configuração do typescript
    .pipe(tsProject())
    .pipe(gulp.dest('build')) // pasta de destino
}


exports.default = series(transformacaoTS)