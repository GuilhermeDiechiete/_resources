const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const Task = require('./models/Task') // arquivo do models

const tasksRoutes = require('./routes/tasksRoutes') // arquivo das rotas

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use('/tasks', tasksRoutes)


conn.sync()
.then(()=>{
    app.listen(3000)
})
.catch((err)=> console.log(err))



