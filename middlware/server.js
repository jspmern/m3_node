let express=require('express')
const productRoute = require('./Route/productRoute')
const authRout = require('./Route/authRout')
let app=express()
// // app.get('/',(req,res,next)=>{
// //     console.log('hello how are you')
// //     //res.end('hello')
// //     next()
// //     //  console.log(req.method)
// //     //  if(true)
// //     //  {
// //     //     res.send('hello how are you 2')
// //     //  }
// //     //  else{
// //     //     next()
// //     //  }
// //     // if(req.method=="POST")
// //     // {
// //     //     next()
// //     // }
// //     // else{
// //     //     res.send('NO ACCESS')
// //     // }
// //     // req.user={name:"utsav",add:"delhi"}
// //     // next()
   
// // },(req,res)=>{
// //     console.log(req.user)
// //     console.log('i am utsav')
// //     res.send('hello how are you')
// // })
// app.get('/',(req,res,next)=>{
//     next()
// },(req,res)=>{
//     res.end('done')
// })
//
//application level middlware
// app.use((req,res,next)=>{
//    if(req.url=="/about")
//    {
//     next()
//    }else{
//     res.send('you are not auth..')
//    }
// })
// router level middlware
app.use(authRout)
app.use(productRoute)

//error level middlware
app.use((err,req,res,next)=>{
    console.log(err.message)
    res.status(500)
    res.send('somthing wrong')
})

//built in middlware
app.use(express.json())

app.get('/',(req,res)=>{
    throw  new Error('somthing wrong while reading the data')
})
app.get('/about',(req,res)=>{
    res.send('hello about')
})
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('done')
})
 
app.listen(8080,()=>{
    console.log('connect')
})