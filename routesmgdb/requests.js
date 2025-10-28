const express = require('express');
const It = require('../models/Item.js');
const router = express.Router();

router.get('/models',async(req,res) => {
    const data = await Item.find();
    res.json(data);
});

router.post('/models',async(req,res) => {
    const updated_db = await Item.create(req.body);
    res.json(updated_db);
});

router.delete('/models',async(req,res) => {
    const updated_db = await Item.findOneAndDelete({name:req.body.name});
    res.json(updated_db);
});

router.put('/models',async(req,res) => {
    const updated_db = await Item.findByOneAndUpdate({name:req.body.name},{value:req.body.value},{new:true});
    res.json(updated_db);
});


module.exports = router