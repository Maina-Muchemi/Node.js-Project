const express = require("express");
const app = express();
const mongoose = require('mongoose')
const morgan = require("morgan")
const bodyParser = require('body-parser')
const expressValidator = require("express-validator")

const dbUrl = "mongodb+srv://muchemiian01:MMaina74@cluster0.hrj367s.mongodb.net/?retryWrites=true&w=majority"



//db
mongoose.connect(dbUrl,
    { useNewUrlParser: true })
.then(() => {console.log("DB Connected")})

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
})
// Bring in routes
const postRouter = require('./routes/post')




// middleware
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(expressValidator())
app.use("/", postRouter);



const port =  8080;
app.listen(port, () => {console.log(`A Node Js API:${port}`)});