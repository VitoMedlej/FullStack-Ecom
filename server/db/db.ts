const mongoose = require('mongoose');

const connectToDB = async() => {
    try {
        console.log(process.env.URI);
    
        await mongoose.connect(`${process.env.URI}`);
        console.log('MONGO DATABASE CONNECTED');
        
    } catch (err) {
        console.log(err);
    }
}
const db = mongoose.connection
export {connectToDB, db}