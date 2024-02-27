let express=require('express')
let route=express.Router()
route.get('/create-product',(req,res)=>{
    res.send('product created')
})
route.get('/delete-product',(req,res)=>{
    res.send(' delete product')
})
module.exports=route