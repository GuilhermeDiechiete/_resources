const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')

app.use(express.json()) // para o express conseguir usar json

// req == requisição -> o que o usuario está mandando 
// res == resultado -> o que o servidor está devolvendo

// METODO GET
app.get('/', (req, res)=>{
  console.log('Resposta para ADM: Rota RAIZ Acessada!')
  res.send('Rota Raiz')

})

app.use('/admin', adminRoutes)


app.listen(3000, ()=>{
  console.log('Resposta para ADM: Servidor Iniciado!')
})