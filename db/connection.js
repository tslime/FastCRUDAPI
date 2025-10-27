const db = require('mongoose');
db.connect("mongodb://192.168.2.57:27017/fastcrud",{useNewUrlParser: true, useUnifiedTopology: true});
module.exports = db;