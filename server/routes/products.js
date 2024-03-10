const express = require('express');
const router = express.Router();
const Product = require('../model/product')

router.get('', async function(req, res){
    foundProducts = await Product.find({})
        res.json(foundProducts)
})


router.get('/:productId', async function(req, res){
    const productId = req.params.productId;
    foundProducts = await Product.findById(productId)
        res.json(foundProducts)
})

module.exports = router