const querystring = require('querystring');

const params = querystring.parse('name=John&age=30');
console.log(params); // { name: 'John', age: '30' }
console.log(querystring.stringify(params)); // name=John&age=30
