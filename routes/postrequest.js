module.exports = post_request;
const f = require('fs');
const path = __dirname + '/../data/db_test.json'; 


function post_request(req,res){
    
    let text = f.readFileSync(path,'utf8');
    let data = JSON.parse(text);
    data.push(req.body);
    f.writeFileSync(path,JSON.stringify(data,null,2));
    text = f.readFileSync(path,'utf8');
    data = JSON.parse(text);

    res.json({message:"Updated: \n \n",d:data});
    console.log("db updated\n");
}