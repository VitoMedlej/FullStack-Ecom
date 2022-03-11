const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const port = 9000 || process.env.PORT
const {connectToDB ,db} = require('../db/db')
const productModel = require('../db/Models/ProductModel')
require('dotenv').config();


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));







app.get('/', (req, res)  =>{
        try {
            res.send('ProductModel')
        }
        catch (err) {
            console.log(err);
            res.status(400).send('error you fucking idiota')
        }
})




const sendtodb = async (product) => {
    try {
        await connectToDB()
      await  product.save()
        console.log('ended');
    
    }
    catch (err) {
        console.log(err);
        
    }
}



app.post('/dashboard/add-products',async (req,res,next)=>{
    const Data = req.body
    const product = new productModel(Data)
    await sendtodb(product)
    res.send('SHIT SUCCECEDED')
    
   
})
 
app.listen(port,()=>{
    console.log("server running at port :" + port);
    
});


