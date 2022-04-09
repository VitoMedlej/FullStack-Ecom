const mongoose = require('mongoose');

const connectToDB = async () => {
  
    const uri = process.env.URI
    try {

        await mongoose.connect(`${uri}`);

        console.log('MONGO DATABASE CONNECTED');

    } catch (err) {
        console.log(err);
    }
}
const db = mongoose.connection
module.exports = { connectToDB, db}