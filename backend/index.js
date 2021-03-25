const express = require('express')
const app = express()
const port = process.env.PORT || 3080

app.get('/', (req, res) => {
  res.send(`Hello World!`)
})

app.listen(port, () => {
  console.log(`Vayyar node app listening at http://localhost:${port}`)
})