const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')
const app = express()

// Init Middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Connect Database
connectDB()

// define route
app.get('/', (req, res) => {
    res.send(`Bem-vindo ao BOOT Bank`)
})

require('./rest/routes/routes')(app)

// listen for requests
app.listen(4000, () => {
    console.log("Server is listening on port 4000")
})