
const products = require("./models");

const allProducts=(req, res)=>{

    res.status(200).json(products)
};

const findOneProduct = (req,res)=>{
const id  = req.params.id;

const product = products.find((ele)=>ele.id == id);

(!product)?res.status(404).json("Product with the id not logged")
:res.status(200).json(product);
};

const ProductPage = (req,res)=>{

    res.status(200).json(products)
};

const addProduct =(req, res)=>{
   
const Profile ={
   
    name:req.body.name,
    price:req.body.price,
    category:req.body.category,
    quantity:req.body.quantity

};
products.create(Profile)

res.status(201).json("new product has been successfully logged")
};


module.exports = {allProducts, findOneProduct, ProductPage, addProduct}


