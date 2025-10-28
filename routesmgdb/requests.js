const express = require('express');
const It = require('../models/Item.js');
const {check,validationResult} = require('express-validator');
const router = express.Router();



router.get('/models',async(req,res) => {
    const data = await It.find();
    res.json(data);
});

router.post('/models',check('name').notEmpty().withMessage('Name is required'),check('value').notEmpty().withMessage('Value is required'),async(req,res) => {
    const ferror = validationResult(req);
    if(!ferror.isEmpty()){
        return res.status(400).json({errors:ferrors.array()});
    }
    const updated_db = await It.create(req.body);
    res.json(updated_db);        
});

router.delete('/models',check('name').notEmpty().withMessage('Name is required'),async(req,res) => {
    const ferror = validationResult(req);
    if(!ferror.isEmpty()){
        return res.status(400).json({errors: ferror.array()});
    }
    const updated_db = await It.findOneAndDelete({name:req.body.name});
    res.json(updated_db);
});

router.put('/models',check('name').notEmpty().withMessage('Name is required'),check('value').notEmpty().withMessage('Value is required'),async(req,res) => {
    const ferror = validationResult(req);
    if(!ferror.isEmpty()){
       return res.status(400).json({errors: ferror.array()}); 
    }
    const updated_db = await It.findOneAndUpdate({name:req.body.name},{value:req.body.value},{new:true});
    res.json(updated_db);
});


module.exports = router