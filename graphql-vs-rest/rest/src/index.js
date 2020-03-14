const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const controllers = require('./controllers')

app.use(bodyParser.json())
app.get('/product/:id', controllers.getProduct)
app.post('/product/', controllers.addProduct)

app.listen(3000)