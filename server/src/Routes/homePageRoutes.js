const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')



router.get('/', async(req, res) => {
    const FeaturedProduct = mongoose.model('featured')
    const dataArray = await FeaturedProduct.find({})
    res.json([...dataArray])
})

module.exports = router