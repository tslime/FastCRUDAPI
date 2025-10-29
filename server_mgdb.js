//metrics
const metrius = require('./metrics/metrics.js')

//Security
require('dotenv').config({path:'./db/bridge.env'})
const cors = require('cors');
const helmet = require('helmet');
const rlimit = require('express-rate-limit');
const window = rlimit({
  windowMS: 15*60*1000,
  max: 100,
});

//Dependencies
const express = require('express');
const func_requests = require('./routesmgdb/requests.js');
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(window);


//requests server
app.use("/",func_requests);


//get metrics
app.get('/metrics',metrius);

//centralized error handlelr
app.use((err,req,res,next) => {
  console.error("error: ",err.stack);
  res.status(500).json({error: "Internal server error",message: err.message});
});

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log("Server running on http://0.0.0.0:process.env.PORT");
  });
  


