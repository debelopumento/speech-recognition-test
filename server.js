var express = require('express')
var app = express()

app.get('/test1', (req, res) => {
  res.sendFile(__dirname + '/test1-apidotai.html');
})

app.get('/test2', (req, res) => {
  res.sendFile(__dirname + '/test2.html');
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})