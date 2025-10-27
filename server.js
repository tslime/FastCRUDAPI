const express = require('express');
const app = express();


app.get("/",handle_crud_request);




function handle_crud_request(req,res){
    console.log("received\n");

    res.send("served\n");
}