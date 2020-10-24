if (process.env.NODE_ENV == "development"){
    require(`dotenv`).config()
}
require(`dotenv`).config()
console.log(process.env.PORT)

const express = require(`express`)
const cors = require('cors')
const app = express()
const port = process.env.PORT
const router = require(`./router/index`)
const errrorHandler = require(`./middlewares/errorHandlers`)


app.use(express.urlencoded({extended:false}))
app.use(express.json())

//use cors here
app.use(cors())
app.use(`/`,router)
app.use(errrorHandler)


app.listen(port, ()=>{
    console.log(`App on http://localhost:${port}`)
})