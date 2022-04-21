const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')



router.get('/search/:query?', async(req, res) => {
    const query = new RegExp(req.query.query, 'i') 
    console.log('query: ', query);
    const product = mongoose.model('Product')

    let results = await product.find({title : query}).limit(9)
    if (results && results.length > 0) {
        res.json([...results])
        return;
    }
    results = await product.find({category : query}).limit(9)
    if (results) {

        res.json([...results])
        return;
    }
 
    res.json('No products were found!')
})

module.exports = router