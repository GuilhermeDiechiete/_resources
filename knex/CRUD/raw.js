const db = require("../database/connection")


// quando queremos criar uma query

db.raw("SELECT * FROM users").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})