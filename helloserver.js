const express = require('express')
const myAPP = express()
const port = 3000

myAPP.listen(port, (err) => {
  if(err) {
    console.error("Erros starting server: ", err)
  } else {
    console.log(`server running on port ${port}`)
  }
})

myAPP.get('/', (req, res) => {
  res.send('Hello World!')
})

