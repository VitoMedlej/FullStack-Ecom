const port =   process.env.PORT || 3001
const express = require('express');
const app = express();


app.get('/',(req, res) => {
    res.send('hello world 2')
})




// app.use(require('./src/Routes/homePageRoutes'))
// app.use(require('./src/Routes/accountRoutes.js'))
// app.use(require('./src/Routes/authRoutes.js'))
// app.use(require('./src/Routes/searchRoutes.js'))
// app.use(require('./src/Routes/categoryRoutes.js'))

// app.use(require('./src/Routes/dashBoardRoutes.js'))

app.listen(port, () => {
    console.log("server running at port :" + port);

});