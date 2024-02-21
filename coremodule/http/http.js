//step-1 (require http)
let PORT=8080
let http=require('http')
//step 2 use createServer
let server= http.createServer((req,res)=>{
        console.log('request',req.url)
        console.log('method',req.method)
        console.log('headers',req.headers)
        console.log('query',req.query)
        console.log('body',req.body)
           if(req.url=='/' &&req.method)
           {
             res.writeHead(200,{"Content-Type":"text/html"})
            res.statusCode=201
            res.write('hii i am home page')
            res.end()
             //res.end('<h1>hello how are you , i am fine</h1>')
           }
           else{
            res.statusCode=401
            res.end()
           }
       })
//listen
server.listen(PORT,'127.0.0.1' , ()=>{
    console.log(`http://localhost:${PORT}`)
})