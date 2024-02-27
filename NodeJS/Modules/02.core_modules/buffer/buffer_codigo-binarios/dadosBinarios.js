const Buffer = require('buffer').Buffer

const buf = Buffer.from('Curso de Node')

console.log(buf) // codigo banario 

console.log(buf.toString()) // mostrar texto

const buf_string = Buffer.from('Carregando uma string:', 'utf-8')
console.log(buf_string.toString())