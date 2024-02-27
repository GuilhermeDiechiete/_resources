const db = require("../database/connection")


// PESQUISAR UM DADO DENTRO DA TABELA

db.where({nome: "Guilherme"}).orWhere({id: 1}).table("users")
    .then(data => {console.log(data)})
    .catch(err => {console.log(err)})


// PESQUISAR UM DADO NA TABELA COM ALGUMA CONDIÇÃO
db.select()
    .whereRaw("nome = 'Guilherme' OR age > 60").table("users")
        .then(data => {console.log(data)})
        .catch(err => {console.log(err)})