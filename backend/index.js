const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require("./conn");
// const cors = require('cors');
// app.use(cors());

const Itemlist = require('./module');


app.use(express.json());



app.post("/list",async (req, res)=>{
 
    
    
    try{
        console.log(req.body)
        const user = new Itemlist(req.body)

        const createItem = await user.save()
        res.status(201).send(createItem)
    }catch(e){
        res.status(400).send(e);
    }
})


app.get("/listdata",async (req, res)=>{
    try{
        const listdata = await Itemlist.find();
        res.send(listdata);
    }catch(e){
        console.log(e)
    }
})

app.listen(port, ()=>{console.log("ya you connect successfully")})