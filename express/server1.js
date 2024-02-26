let express=require('express')
let app=express()
let path=require('path')
let pdfPath=
app.get('/',(req,res)=>{
//    res.write('<h1>hello</h1>')
//    res.write(`<p>how are you</p> <p> abc${1}</p>`)
//    res.end() 
///....................................................//
// res.send('hii how are you')  //string
   //res.send(`<h1>hello how are you,${"utsav"} </ h1>`)  //html
   //res.send({name:"utsav",age:"x"})   //js (conver js to stringify)
   // res.set({  'Content-Type': 'text/html'  })
   //res.status(200).send("<h1>kfjdsfjkls</h1>")
//    res.send({name:"utsav",flag:null,abc:{}})
//res.download(path.join(__dirname,'xyz.pdf'))
//setting cookie (cookie-name,value,optional({expire(in millisecound and rwx permission)}))
res.cookie('auth',{"token":"hellohoware you"},{expire : 24 * 60 * 60 * 1000,httpOnly:true})
res.send('cookie set done')

})
app.get('/logout',(req,res)=>{
    res.redirect(301,'/login')
    // res.clearCookie('auth')
    // res.send('logout done')
})
app.get('/login',(req,res)=>{
    //res.download(path.join(__dirname,'a.mp4'))
    res.send('hello i am login')
})
app.listen(8080,()=>{
    console.log('connect')
})