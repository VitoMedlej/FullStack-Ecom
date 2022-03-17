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
app.get('/category/:category', async(req, res) => {
    await connectToDB()
    const params = req.params.category
    const product = mongoose.model('Product')
    // const prods = await product.find({'category' : `${params}`});
    const results = await product.find({'category' : `${params}`} ,'title category price id description images inStock');
  
    res.json([...results])
})
app.get('/category/:category/products/:id',async (req,res)=>{
    try {

        // const category = req.params.category
        // const id = req.params.id
        // const product = mongoose.model('Product')
        // const results = await product.find({'id' : `${id}`,category:`${category}`});
        
        // res.json(results)

        res.json([
            {
                "_id": "622f8312ffbece5bdcd9b844",
                "title": "shampoooooo",
                "sizes": [
                    6,
                    7,
                    8,
                    9,
                    11,
                    10
                ],
                "price": "8",
                "images": [
                    "https://ucarecdn.com/f9605bd2-0445-4998-8b5c-d8940f08f26d/"
                ],
                "specifications": [
                    "good shitgood shit\ngood shitgood shit\ngood shitgood shit\ngood shitgood shit"
                ],
                "inStock": true,
                "description": "good shit",
                "category": "accessories",
                "reviews": [],
                "id": "yAEyiAcFs1OobdHB757Hi",
                "weight": "100ml",
                "style": "hair",
                "country": "lebanon",
                "colors": [
                    "black",
                    "white"
                ],
                "Manufacturer": "anez",
                "__v": 0
            }
        ])
    }
    catch(err) {
        res.status(404).send('error ',err)
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
        res
            .status(400)
            .send(`some shit went wrong like ${err}`)
    }
})

app.listen(port, () => {
    console.log("server running at port :" + port);

});
