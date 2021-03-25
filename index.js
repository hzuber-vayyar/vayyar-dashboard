const express = require('express')
const app = express()
const port = process.env.PORT || 3080
const bodyParser = require("body-parser")

const users=["Hannah", "Alon", "Ohad"]

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send(`Hello World! This is the basic call.`)
})

app.get('/users', (req, res) => {
  console.log("/users called!")
  res.json(users)
})

app.listen(port, () => {
  console.log(`Vayyar node app listening at http://localhost:${port}`)
})