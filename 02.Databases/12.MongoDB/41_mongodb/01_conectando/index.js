const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', engine.exphbs())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())


app.listen(3000)