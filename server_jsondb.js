const express = require('express');
const g = require('./routesjson/getrequest.js');
const d = require('./routesjson/deleterequest.js');
const po = require('./routesjson/postrequest.js');
const p = require('./routesjson/putrequest.js')

const app = express();

app.use(express.json());

app.get("/",g);
app.post("/",po);
app.delete("/",d);
app.put("/",p);

app.listen(3000);



