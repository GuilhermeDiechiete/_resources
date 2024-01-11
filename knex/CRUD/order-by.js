const db = require("../database/connection")

db.select().table("users").orderBy("age","desc")
    .then(data => console.log(data))
    .catch(err => console.log(err)) // desc // asc