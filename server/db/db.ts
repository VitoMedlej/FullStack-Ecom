const mongoose = require('mongoose');

// OY5aOdwalewZ64LF
// mongodb+srv://adminz:OY5aOdwalewZ64LF@cluster0.zgipj.mongodb.net/test
//mongodb+srv://<username>:<password>@cluster0.zgipj.mongodb.net/test

const connectToDB = async () => {
try {

    await mongoose.connect('mongodb://localhost/ProductDB');
    
    
}
catch (err) {
    console.log(err);
    
}
}
const db = mongoose.connection
export {connectToDB ,db}