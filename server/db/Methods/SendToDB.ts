

const SendToDB = async(product) => {
    try {
        
        await product.save()

    } catch (err) {
        console.log(err);

    }
}

module.exports = SendToDB