if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") require("dotenv").config()

const express = require('express')
const cors = require('cors')
const tasks = require('./routes/tasks')
const user = require('./routes/users')
const errorHandler = require('./middlewares/errorHandler')

const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', user)
app.use('/tasks', tasks)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`app is running at port ${port}`)
})