const express = require('express');
const userRouter = require("./router/userRouter")
require("./db")
const PORT = 9889
const app = express()
app.use(express.json())
app.use(userRouter)
app.listen(PORT,()=>{
    console.log("my app is running on port " +PORT)
}) 