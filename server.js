const express = require('express');
const g = require('./routes/getrequest.js');
const d = require('./routes/deleterequest.js');
const po = require('./routes/postrequest.js');
const p = require('./routes/putrequest.js')

const app = express();

app.use(express.json());

app.get("/",g);
app.post("/",po);
app.delete("/",d);
app.put("/",p);

app.listen(3000);



