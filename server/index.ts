const express = require('express');
const app = express();
const port = 9000 || process.env.PORT




app.get('/', (req, res)  =>{
    console.log(process.env.PORT);
    
    res.send('hasf.html')
})

app.listen(port,()=>{
    console.log("server running at port :" + port);
    
});


