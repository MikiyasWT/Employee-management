const express = require('express');
const cors = require('cors')
const bodyparser = require('body-parser')
const mongoose= require('mongoose');
const employeesRouter = require('./routes/employees')
const usersRouter = require('./routes/auth')
require('dotenv').config()



//defining middlewares
const app = express();



//app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
//var corsOptions = {
//  origin: "http://localhost:3000"
//};


app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({extended:true}));

app.use('/employees',employeesRouter)
app.use('/api/auth',usersRouter)

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
    {useNewUrlParser:true},
    {useCreateIndex:true},
    {autoIndex: true})

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Connected to Mongo db Atlas")
})


const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`app running on http://localhost:${PORT}`)
})