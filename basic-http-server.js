const express=require('express');
//express is a library
const port=3000
const app=express();
app.get('/',function(req,res){
    res.send('hello world!')
})
app.listen(port)
