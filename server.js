const express = require("express")
require("./db.js")
const port = 3000
const app = express()
app.use(express.json())
const {allProducts, findOneProduct, ProductPage, addProduct}=require("./PrLogsControl.js")
// const fs = require("fs")

app.get("/",ProductPage)
app.get("/all",allProducts)

app.get("/products/id",findOneProduct)

app.post("/products",addProduct)


// fs.writeFileSync("./many.txt",(err,data)=>{
//      = ""
// })

app.listen(port,()=>{console.log(`my application is running on ${port}`)})


















































// const products = require("./ProductsLog");
// const fs= require("fs")

// app.get("/data",(req,res)=>{
    //     fs.readFile("./many.txt",(err,data)=>{
        //         if(err){
            //             res.status(400).json({err:err})
            //         }else{
                //             res.status(200).json({data:data.toString()})
                //         }
                //     })
                // })
                // app.get("/",(req,res)=>{
                    //     res.status(200).json('whats popin')
                    // })
                    //     console.log("here I rule")
                    //     res.send('Hi')
                    // })
                    
                    // app.get('/all',allProducts);
                    
                    
                    //get all students
                    
                    
                    //params = /:placeholder
                    // app.get("/username/:fullname", (req,res)=>{
                        
                        //     console.log( req.params.fullname)
                        // const name = req.params.fullname
                        // res.status(200).json(`Welcome mr ${name}`)
                        // })
                        
                        // get one
                        // const express = require("express")
                        // const app = express();
                        // app.use(express.json())
                        // const port = 2890
                        // const {allProducts, findOneProduct, ProductPage,addProduct} = require('./PrLogsControl');
                        // app.get("/products",ProductPage)
                        // app.get("/products/:id",findOneProduct)
                        
                        // app.post("/products",addProduct)
                        
                        

  // app.listen(port,()=>{console.log(`'my prt is ${port}`)})

  // app.get("/file",(req,res)=>{