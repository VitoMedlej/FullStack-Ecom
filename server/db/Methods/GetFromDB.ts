const ProductModel = require('../Models/ProductModel')

const getfromDB = async () => {
    try {
        await ProductModel.fetchData((data)=>{
           return data
           
       })
    } 
    catch (err) {
        console.log(err);

    }
}
export default getfromDB