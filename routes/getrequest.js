module.exports = get_request;

function get_request(req,res){
    console.log("get received\n");

    res.send("get served\n");
}