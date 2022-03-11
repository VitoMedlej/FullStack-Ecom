const mongoose = require('mongoose');



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