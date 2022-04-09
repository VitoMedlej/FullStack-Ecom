const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')




router.get('/categories', async(req, res) => {
    

    const Category = mongoose.model('Category')
    const dataArray = await Category.find({})
    res.json([...dataArray])

})

router.get('/category/:category?', async(req, res) => {
    

    const ProductLimitSize = req.query.limit || 9
    const currentPageNumber = req.query.page || 0
    const category = req.params.category
    const product = mongoose.model('Product')
    const totalProducts = await product.countDocuments(category ? {'category': `${category}`} : {})
    const TotalPages = Math.ceil(totalProducts / ProductLimitSize)

    // const results = await product
    //     .find(category ? {'category': `${category}`} : {})
    //     .limit(ProductLimitSize)
    //     .skip(ProductLimitSize * currentPageNumber);


    const results = await product.find(category
        ? {
            category
        }
        : {})
        .limit(ProductLimitSize)
        .skip(ProductLimitSize * currentPageNumber);
  
    res.json({
        products: [...results],
        TotalPages: TotalPages
    })
})

router.get('/category/:category/products/:id', async(req, res) => {
    try {
        
        const category = req.params.category
        const id = req.params.id
        const product = mongoose.model('Product')
        const results = await product.find({'_id': `${id}`, category});

        res.json(results)
        //http://localhost:3000/category/shoes/products/lUhdwg8nmgG_OfPT3v810qwrqwr%20
        //http://localhost:3000/category/accessories/products/623638a72ab762d084a7acc7


    } catch (err) {
        res
            .status(404)
            .send(` ${err}`)
    }

})

module.exports = router