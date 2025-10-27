module.exports = get_request;
const f = require('fs')
const path = __dirname + '/../data/db_test.json'

function get_request(req,res){
    const text = f.readFileSync(path,'utf8');
    const data = JSON.parse(text);

    res.send(data);
}