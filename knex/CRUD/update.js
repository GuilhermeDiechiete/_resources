const db = require("../database/connection")

// EDITAR UM DADO NA TABELA

db.where({nome: "Dhaniela"}).update({age: 24}).table("users")
    .then(data => {console.log(data)})
    .catch(err => {console.log(err)})