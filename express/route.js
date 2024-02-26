let express=require('express')
 
let route=express.Router()
route.get('/',(req,res)=>{
    res.send('hello i am utsav')
})
route.post('/',(req,res)=>{
 console.log(req.body)
 res.send('post method')
})

route.all('/about',(req,res)=>{
res.send('hello i am all method')
})
route.get('/contact',(req,res)=>{
    res.send('hello utsav i am contact')
})
module.exports={route}


  