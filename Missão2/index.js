const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})
const list = ['java','kotlin','android']

// EndPoint Read ALL [GET] /pensonagens

app.get('/pensonagens', function (req, res){
  res.send(list)
})
app.listen(3000)