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
connectToDB()

app.use(require('./Routes/homePageRoutes.js'))

app.use(require('./Routes/categoryRoutes.js'))

app.use(require('./Routes/dashBoardRoutes.js'))





app.listen(port, () => {
    console.log("server running at port :" + port);

});
