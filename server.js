import dotenv from 'dotenv'
import express from 'express';
import morgan  from 'morgan';
import connectToDb from './config/db.js';


// configure dotenv 
dotenv.config();
// config database 
connectToDb();

// rest Object
const app = express()
//middlewares 
app.use(express.json())
app.use(morgan(`dev`)); // for parsing application/json

// rest API 
app.get('/',(req,res)=>{
    res.send({
        message: 'Hello ujjal World'
    })
})

// declaring port 
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})