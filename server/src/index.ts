const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const port = 9000 || process.env.PORT
const {connectToDB, db} = require('../db/db')
const product = require('../db/Models/ProductModel')
const getfromDB = require('../db/Methods/GetFromDB')
const mongoose = require('mongoose')
const sendToDB = require('../db/Methods/SendToDB')
const Category = require('../db/Models/CategoryModel')
require('dotenv').config();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/dashboard/products', async(req, res) => {
    await connectToDB()

    const product = mongoose.model('Product')
    const dataArray = await product.find({})
    res.json([...dataArray])
})

app.get('/categories', async(req, res) => {
    await connectToDB()

    const Category = mongoose.model('Category')
    const dataArray = await Category.find({})
    res.json([...dataArray])

})

app.post('/dashboard/add-products', async(req, res, next) => {
    try {
        await connectToDB()

        const producta = new product(req.body)
        sendToDB(producta)

        res
            .status(200)
            .send('product has been added')
    } catch (err) {
        res
            .status(400)
            .send(`some shit went wrong like ${err}`)
    }
})

app.listen(port, () => {
    console.log("server running at port :" + port);

});
