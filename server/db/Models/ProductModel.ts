const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
      
    },
    price: {
        type: Number || String
    },
    sizes: {
        type: [Number],
    },
    images: {
        type: [String]
    },
    specifications: {
        type: [String]
    },
    inStock: {
        type: Boolean
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    reviews: [
        {
            reviewer: String,
            stars: Number,
            comment: String
        }
    ],
    id: {
        type: String
    },
    weight: {
        type: String
    },
    style: {
        type: String
    },
    country: {
        type: String
    },
    colors: {type :[String]},
    Manufacturer: {
        type: String
    }
},{ strict: false })

const User = mongoose.model("User", ProductSchema);

module.exports = User;