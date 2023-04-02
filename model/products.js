const mongoose = require('mongoose')

const schema = mongoose.Schema;
const objectId = schema.ObjectId

const products = new schema({
    id:objectId,
    productName:{type:String, required:true},
    productPrice:{type:Number, required:true},
    productDescription:{type:String, required:true},
    date:{type:String}

})

module.exports= mongoose.model('products', products,'products')