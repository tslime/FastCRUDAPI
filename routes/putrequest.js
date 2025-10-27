module.exports = put_request;

function put_request(req,res){
    console.log("put received");
    res.send("put served");
}