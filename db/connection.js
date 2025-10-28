require('dotenv').config({path:'./bridge.env'});
const db = require('mongoose');
db.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true});
module.exports = db;