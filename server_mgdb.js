const express = require('express');
const func_requests = require('./routesmgdb/requests.js');


const app = express();
app.use(express.json());

app.use("/",func_requests);

app.listen(3000, '0.0.0.0', () => {
    console.log("Server running on http://0.0.0.0:3000");
  });
  


