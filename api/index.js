const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000

routes(app)

// Fica ouvindo o servidor pra saber se está tudo ok
app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`))

module.exports = app 