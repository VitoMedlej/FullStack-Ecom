const express = require('express');
const app = express();
const port = process.env.PORT || 3001
console.log('port: ', port);




app.get('/', (req, res)  =>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log("server running at port :" + port);
    
});


