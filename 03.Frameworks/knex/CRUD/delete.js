const db = require("../database/connection")


db.where({id: 3}).delete().table("users")
    .then(data => {console.log("Usuário excluido com sucesso." + data)})
    .catch(err => {console.log(err)})