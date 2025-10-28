const dbase = require('../db/connection.js');
const item_schema = new dbase.Schema({name:String,value:String});
const Item = dbase.model('Item',item_schema);
module.exports = Item;