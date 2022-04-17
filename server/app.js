require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("uploads"));

mongoose.connect(process.env.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  
}).then(()=>console.log('connect to DB'))
.catch((e)=>console.log(e));

app.use('/api/post',require('./routes/index'))

app.listen(port,()=>{
    console.log('Running on port 5000');
})