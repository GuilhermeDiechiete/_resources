const path = require('path');

const filePath = '/path/to/file.txt';
console.log(path.basename(filePath)); // file.txt
console.log(path.dirname(filePath)); // /path/to
console.log(path.extname(filePath)); // .txt
