const mongoose = require('mongoose')



const CategorySchema = mongoose.Schema({
    link : String,
    id : Number,
    title : String,
    desc : String,
    img : String,
})

const CategoryModel = mongoose.model("Category", CategorySchema, 'MainPageCategories')

export default CategoryModel