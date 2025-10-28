module.exports = delete_request;
const path = __dirname + '/../data/db_test.json';
const f = require('fs');

function delete_request(req,res){
    let text = f.readFileSync(path,'utf8');
    let data = JSON.parse(text);

    let i = 0;
    let b = false;
    while(i < data.length && !b){
        if(data[i].id === req.body.id){
            data.splice(i,1);
            b = true;
        }

        i++;
    }

    if(!b){
        return res.status(404).json({message:"item not found"});
    }
    
    f.writeFileSync(path,JSON.stringify(data,null,2));
    text = f.readFileSync(path,'utf8');
    data = JSON.parse(text);

    res.json(data);
    console.log("entry delted");
}