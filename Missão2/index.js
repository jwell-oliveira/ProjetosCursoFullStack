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

// EndPoint Read by id [GET] /pensonagens:id
app.get('/pensonagens/:id', function (req, res){
    const id = req.params.id

    const item = list[id - 1]
    
    res.send(item)
})
app.listen(3000)