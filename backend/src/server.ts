import dot from 'dotenv';
dot.config()
import express from 'express';
import cors from 'cors';
import asynchandler from 'express-async-handler';
import brainrouter from './router/brain.router';
import userrouter from './router/user.router';
import chatRouter from './router/chat.router';
import adminRouter from './router/admin.router';
import { dbconnect } from './config/dbconnet.config';
dbconnect()
const app=express()

app.use(express.json())
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))

app.get("/",asynchandler(
    async(req,res)=>{
        res.send("hello world")
    }
))


app.use("/api/braintumor",brainrouter);
app.use("/api/user",userrouter);
app.use("/api/chat",chatRouter);
app.use("/api/admin",adminRouter);



const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT)
})
