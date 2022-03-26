const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')


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

        const producta = new product(req.body)
        sendToDB(producta)

        res
            .status(200)
            .send('product has been added')
    } catch (err) {
        console.log(err);
        res
            .status(400)
            .send('error')
    }
})


module.exports = router