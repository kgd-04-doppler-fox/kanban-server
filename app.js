require('dotenv').config()
const express = require ('express');
const indexRouter = require ('./routes/index.js')
const cors = require ('cors');
const errorHandler = require ('./middlewawre/errorHandler.js');
const app = express();
const port = process.env.PORT;

app.use (express.urlencoded({ extended:false }));
app.use (express.json())
app.use (cors());

app.use ('/',indexRouter);
app.use (errorHandler);

app.listen (port, () => {
    console.log(`Express running on port http://localhost:${port}`)
})