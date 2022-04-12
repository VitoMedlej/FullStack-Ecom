

const SendToDB = async(product) => {
    try {
        
        await product.save()

    } catch (err) {
        console.log('err :', err);

    }
}

module.exports = SendToDB