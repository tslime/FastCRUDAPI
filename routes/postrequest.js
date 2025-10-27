module.exports = post_request;

function post_request(req,res){
    console.log("post received\n");
    res.send("post served\n");
}