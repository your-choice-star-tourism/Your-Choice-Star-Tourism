import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String},
    description2: {type:String},
    category: {type:String, required:true},
    image: {type:[String], required:true},
    price: {type:Number,},
    kidprice: {type: Number},
    date: {type:Number,},
    popular: {type:Boolean},
    mostbooked: {type:Boolean},
    addquery: {type:Boolean},
    pickup: {type:Boolean},
    expectations: {type:[String]},
    addons: [
        {
        addon_name: {type:String},
        price: {type:Number},
        kidprice: {type:Number},
        image: {type:String},
        }
    ]
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema)

export default productModel
