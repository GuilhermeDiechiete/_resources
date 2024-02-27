const path = require('path')


console.log(path.basename('c:\\temp\\arquivo.html'))

//arruma a url errada
console.log(path.normalize('c:\\temp/dir//subdir/dir/..'))

//organiza a url
console.log('join path:', path.join('/teste', 'teste2', 'teste3/teste4', 'dir2', '..'))

//mostra o caminho absoluto do arquivo
console.log('resolve', path.resolve('path.js'))

//mostrar a extensão do arquivo
console.log('extension:', path.extname('path.js'))