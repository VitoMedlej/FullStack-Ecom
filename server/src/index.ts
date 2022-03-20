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
const FeaturedModel = require('../db/Models/FeaturedModel')
require('dotenv').config();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/',async (req, res) => {
    await connectToDB()
    const FeaturedProduct = mongoose.model('featured')
    const dataArray = await FeaturedProduct.find({})
    res.json([...dataArray])
})

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
app.get('/category/:category', async(req, res) => {
    await connectToDB()
    const params = req.params.category
    const product = mongoose.model('Product')
    // const prods = await product.find({'category' : `${params}`}); const results =
    // await product.find({'category' : `${params}`} ,'title category price id
    // description images inStock');
    const results = await product.find({'category': `${params}`}).limit(9);

    res.json([...results])
})
app.get('/category/:category/products/:id', async(req, res) => {
    try {
        await connectToDB()
        const category = req.params.category
        const id = req.params.id
        const product = mongoose.model('Product')
        const results = await product.find({'_id': `${id}`, category: `${category}`});


        res.json(results)

    } catch (err) {
        res
            .status(404)
            .send(` ${err}`)
    }

})

app.delete('/dashboard/products/:id', async(req, res) => {
    const id = req.params.id
    try {
        await connectToDB()
        const product = mongoose.model('Product')
        const request = await product.deleteOne({id:`${id}`})
        const result = await request.json()
        
        }
    catch (err) {
        res.status(400).send(`some error ,${err}`)
    }
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
        console.log(err);
        res
            .status(400)
            .send('fucckk you')
    }
})

app.listen(port, () => {
    console.log("server running at port :" + port);

});
