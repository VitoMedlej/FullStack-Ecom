const mongoosea = require("mongoose");

const ProductSchema = mongoosea.Schema({
    title: {
        type: String,
        required: true
    },
    sizes: [Number],
    price: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    specifications: [String],
    inStock: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    reviews: [
        {
            reviewer: String,
            stars: Number,
            comment: String
        }
    ],
    id: {
        type: String,
        required: true
    },
    weight: String,
    style: String,
    country: String,
    colors: [String],
    Manufacturer: String
}, {strict: true})

const productModel = mongoosea.model("Product", ProductSchema, 'Products')

module.exports = productModel