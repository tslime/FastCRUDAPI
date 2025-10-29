const client = require('prom-client');
const register = new client.Registry();

const metrics = client.collectDefaultMetrics({register});

module.exports = async (req,res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
};