import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB")
  } catch (error) {
    handleError(error);
    throw error
  }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB Disconected!")
})
mongoose.connection.on("connected", ()=>{
    console.log("MongoDB Connected!")
})

app.get("/", (req,res)=> {
    res.send("Hello First Request!")
})

app.listen(8800, ()=> {
    connect()
    console.log("Connected to backend!")
})