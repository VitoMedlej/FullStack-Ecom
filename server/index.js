const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const port =   process.env.PORT || 3001
const {connectToDB, db} = require('./db/db.ts')
const User = require('./db/Models/userModel')
const product = require('./db/Models/ProductModel')
const getfromDB = require('./db/Methods/GetFromDB')
const mongoose = require('mongoose')
const Category = require('./db/Models/CategoryModel')
const FeaturedModel = require('./db/Models/FeaturedModel')
require('dotenv').config();




app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
connectToDB()




app.use(require('./src/Routes/homePageRoutes'))
app.use(require('./src/Routes/accountRoutes.js'))
app.use(require('./src/Routes/authRoutes.js'))
app.use(require('./src/Routes/searchRoutes.js'))
app.use(require('./src/Routes/categoryRoutes.js'))

app.use(require('./src/Routes/dashBoardRoutes.js'))

app.listen(port, () => {
    console.log("server running at port :" + port);

});






