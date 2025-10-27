module.exports = get_request;
const f = require('fs')


function get_request(req,res){
    console.log("get received\n");

    res.send("get served\n");
}