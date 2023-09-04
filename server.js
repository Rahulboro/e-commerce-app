import dotenv from 'dotenv'
import express from 'express';
import morgan  from 'morgan';


// configure dotenv 
dotenv.config();

// rest Object
const app = express()

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