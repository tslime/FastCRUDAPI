module.exports = delete_request;

function delete_request(req,res){
    console.log("delete received\n");
    res.send("delete served\n");
}