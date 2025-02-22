const express = require('express');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json())


app.get("/api/message",(req,res)=>{
    res.json({message:"Hello, this is the message sent from the backend"});
})

app.get("/",(req,res)=>{
    res.send("This is the backend");
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})