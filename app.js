require ('dotenv').config()
const express = require ('express')
const app = express ()
const router = require ('./routes')
const cors = require ('cors')
const port = 3000


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use(router)

app.listen(port, function (){
    console.log(`listening port: ${port}`)
})