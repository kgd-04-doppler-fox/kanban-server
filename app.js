if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const cors = require('cors')
const routes = require('./routes/index.js')
const errorHandler = require('./middlewares/errorHandler')

const port = process.env.PORT || 3000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', routes)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`app is running at port ${port}`)
}) 