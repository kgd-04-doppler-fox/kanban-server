require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT
const indexRoutes = require('./routes/index')
const taskRoutes = require('./routes/task')

app.use(express.urlencoded({extended : true}))

app.use(express.json())

app.use(cors())

app.use(indexRoutes)

app.use('/tasks', taskRoutes)

app.listen(PORT, (req, res) => {
    console.log(`connected to port: ${PORT}`);
})
