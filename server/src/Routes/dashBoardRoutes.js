const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const productModel = require('../../db/Models/ProductModel')
const sendToDB = require('../../db/Methods/SendToDB')
const jwt = require('jsonwebtoken')
const User = require('../../db/Models/userModel')
const DecodeJWT = require('../Helpers/DecodeJWT')
const CheckUserRole = require('../Helpers/UserIsAdmin')

router.get('/dashboard/products', async(req, res) => {
    const product = mongoose.model('Product')
    const dataArray = await product.find({})
   
    res.json([...dataArray])
})

router.delete('/dashboard/products/:id', async(req, res) => {
    const id = req.params.id
    try {
        const decodedUser = await DecodeJWT(req)
        const UserisAdmin = await CheckUserRole(decodedUser, User)

        if (!UserisAdmin) {
            res
                .status(400)
                .send('you are not authorized to remove products!')
            return;
        }
        const product = mongoose.model('Product')
        const request = await product.deleteOne({_id: `${id}`})

        if (request) {
            res
                .status(200)
                .send('removed successfully')

            return
        }

        res
            .status(400)
            .send('something went wrong')
    } catch (err) {

        res
            .status(400)
            .send(`some error ,${err}`)
    }
})

router.post('/dashboard/add-products', async(req, res, next) => {
    try {

        if (!req.body || req.body.title) {

            res
                .status(400)
                .send('error ,product details are missing')
            return;
        }

        const decodedUser = await DecodeJWT(req)

        const UserisAdmin = await CheckUserRole(decodedUser, User)

        if (!UserisAdmin) {
            res
                .status(400)
                .send('you are not authorized to add products!')
            return;
        }
        
        const product = new productModel(req.body);
        await product.save()

        res
            .status(200)
            .send('product has been added')

    } catch (err) {
        
        console.log('err :', err);
        res
            .status(400)
            .send('error ,you are not authorized to add products!')
    }
})

module.exports = router