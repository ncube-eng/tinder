import express from 'express';

import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from  'cors';

//App config

const app = express();
const PORT = process.env.PORT || 8001
const connection_url = 'mongodb+srv://nkosi:lomusa1990@cluster0.zxkav.mongodb.net/tinderdb?retryWrites=true&w=majority'


//MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended:tru}));
app.use(Cors());


//Dbconfig
mongoose.connect(connection_url,{

    useNewUrlParser:true,
    //useCreateIndex:true,
    useUnifiedTopology:true,
}
    )

//API Endpoints

app.get('/',(req,res)=>{
    res.status(200).send("Hello World");
});

app.post('/tinder/card',(req,res)=>{
    const dbCard = req.body;

    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

//fetch the data we just posted to confirm if its delieveresd

app.get('/tinder/card',(req,res)=>{
    const dbCard = req.body;

    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})
//Listen

app.listen(PORT,()=>{
    console.log(`Server running on locahost: ${PORT}`);
})