// SASS -> pre processador de CSS

const gulp = require('gulp')
const { series } = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {

    return gulp.src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))

    .pipe(uglifycss({"uglyComents": true,}))

    .pipe(concat('estilo.min.css'))

    .pipe(gulp.dest('build/css'))
}

exports.default = series(transformacaoCSS)
