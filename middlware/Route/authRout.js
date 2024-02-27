let express=require('express')
let route=express.Router()
route.get('/login',(req,res)=>{
    res.send('login done')
})

route.get('/logout',(req,res)=>{
    res.send('logout done')
})
module.exports=route