const db = require("../database/connection")

// SELECIONAR TODA A TABELA
db.select().table("users").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

// SELECIONAR COLUNAS DE UMA TABELA
db.select(["id", "nome"]).table("users").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})