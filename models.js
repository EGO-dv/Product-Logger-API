const mongoose = require("mongoose")



const schema =mongoose.Schema({
    name:{type:String,required:true},

    price:{type:String,required:true,max:1000},

     category:{type:String,required:true,max:1000},

    quantity:{type:String,required:true,}

});

const productModel = mongoose.model("productLog",schema)

module.exports = productModel