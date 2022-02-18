const express = require('express');
const app = express();
const port = 3001 || process.env.PORT


app.get('/', (req, res)  =>{
    res.sen('hasf.html')
})

app.listen(port,()=>{
    console.log("server running at port :" + port);
    
});


