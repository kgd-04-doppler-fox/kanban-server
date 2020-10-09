require('dotenv').config()

const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')

const taskRoutes = require ('./routes/tasks')
const userRoutes = require ('./routes/users')

const errorHandler = require ('./middlewares/errorHandler')

app.use(express.urlencoded ({extended: false}))
app.use(express.json())
app.use(cors())

app.use('/', userRoutes)
app.use('/tasks', taskRoutes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`running app on port ${PORT}`)
})