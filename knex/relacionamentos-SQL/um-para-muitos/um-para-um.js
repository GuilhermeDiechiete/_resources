const db = require("../../database/connection")


db.insert({
    nome: "Daniel",
    users_id: 6
}).table("folha").then(data => console.log(data)).catch(err => console.log(err))