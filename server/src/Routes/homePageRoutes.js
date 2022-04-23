const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')


router.get('/e',(req, res) => {
    res.send('nothing')
})

router.get('/', async(req, res) => {
    const FeaturedProduct = mongoose.model('featured')
    const dataArray = await FeaturedProduct.find({})
    res.json([...dataArray])
})

module.exports = router