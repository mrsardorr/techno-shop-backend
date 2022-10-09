const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    name: {
        type: String,
        required: true  
    },
    price: Number,
    categoryId: Number
})

module.exports = model('product', productSchema)