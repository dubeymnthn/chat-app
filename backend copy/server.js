const express= require('express');
const dotenv= require('dotenv');
const res = require('express/lib/response');
const { chat } = require('./data/data');
dotenv.config();

const app= express();
app.get('/',(req,res)=>{
    res.send("Api is running")
})

app.get('/api/chats',(req,res)=>{
    res.send(chat)
})

app.get('/api/chats/:id',(req,res)=>{
    // console.log(chats);
    const singlechat = chat.find((c)=>c._id === req.params.id);
    res.send(singlechat);
})
const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log('Server Started on the port '));