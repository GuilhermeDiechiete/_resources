const db = require("../database/connection")

var formulario = [
    {nome: "Antonio", lastname: "Guilherme", age: 64},
    {nome: "Joaquim", lastname: "Silva", age: 6},
]

var query = db.insert(formulario).into("users").then(data => {
    console.log(data)
}).catch(err => {
    console.log("Erro ao salvar dados" + err)
})

