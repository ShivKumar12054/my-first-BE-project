const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const PORT = 3000

const app = express()
app.use(cors())
app.use(express.json())

const users = [
    {id: 1, name: 'spiderman', age: 77},
    {id: 2, name: 'ironman', age: 33},
     {id: 3, name: 'antman', age: 1091},
    {id: 4, name: 'thor', age: 33},
    {id: 4, name: 'Akshay S', age: 25},
]

// to log the request to this server
app.use(morgan('combined'))

app.get("/api/users", (req, res) => {
    res.json(users)
})

app.post("/api/users", (req, res) => {
    const newUser = req.body;
    users.push(newUser)
    res.status(201).json(newUser)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
