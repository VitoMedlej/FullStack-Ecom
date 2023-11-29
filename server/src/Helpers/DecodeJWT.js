const jwt = require('jsonwebtoken')

const DecodeJWT = async (req) => {
    try {

        const token = req.headers.authorization;
        const decodedUser = await jwt.verify(token, process.env.JWT_SECRET);
        
        return decodedUser
    }
    catch(err) {
        console.log('err :', err);
        throw err
    }
}

module.exports = DecodeJWT