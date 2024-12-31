const express=require('express');
//express is a library
const port=3000
const app=express();
app.get('/',function(req,res){
    res.send('hello world!')
})
app.listen(port)
// get request is used to get some data,post req is used to post something like posting an img in instagram,put is used to replace the data
//delete is used to delete the data
//here are some status code 200:everything is ok,404:file not found,411:the inputs are incorrect,500:there is an error
