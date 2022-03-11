const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const port = 9000 || process.env.PORT
const {connectToDB ,db} = require('../db/db')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res)  =>{
    console.log(process.env.PORT);
    db.save('hello bitch')
    
    res.send('treey')
})


app.post('/dashboard/add-products',(req,res,next)=>{
    console.log(req.body);
    res.send('SHIT SUCCECEDED')
})
 
app.listen(port,()=>{
    console.log("server running at port :" + port);
    
});


