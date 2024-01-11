// JUNTAR OS ARQUIVOS PARA FUNCIONAR A APLICAÇÃO 

const gulp = require('gulp')

const { series } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


function padrao(callB){

    gulp.src('src/**/*.js')
    .pipe(babel({
        comments: false, // nao ir com comentarios
        presets: ["env"], // pega o js mais atualizado
    }))
    .pipe(uglify())// pega todo o codigo e mamificar
    .pipe(concat('codigo.min.js')) // concatenar e criar um arquivo novo
    .pipe(gulp.dest('build')) // destino do codigo
    
    .on('error', err => console.log('Deu Erro!'+ err))

    console.log('Arquivo criado com sucesso!')
    return callB()
}

module.exports.default = series(padrao)