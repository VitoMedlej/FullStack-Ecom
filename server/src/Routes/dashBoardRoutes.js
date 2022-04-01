const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const productModel = require('../../db/Models/ProductModel')
const sendToDB = require('../../db/Methods/SendToDB')

router.get('/dashboard/products', async(req, res) => {
    const product = mongoose.model('Product')
    const dataArray = await product.find({})
    res.json([...dataArray])
})

router.delete('/dashboard/products/:id', async(req, res) => {
    const id = req.params.id
    try {

        const product = mongoose.model('Product')
        const request = await product.deleteOne({id: `${id}`})
        const result = await request.json()

    } catch (err) {
        res
            .status(400)
            .send(`some error ,${err}`)
    }
})

router.post('/dashboard/add-products', async(req, res, next) => {
    try {
        if (req.body) {

            const product = new productModel(req.body)
            sendToDB(product)

            res
                .status(200)
                .send('product has been added')
        }
    } catch (err) {
        console.log(err);
        res
            .status(400)
            .send('error')
    }
})

module.exports = router