//write a first code for creating api
let express = require("express");
// const { route } = require("./route");
let app = express();
 
 //get
 //post
 //put
 //patch
 //delete
 //use
 //all
 //Router
  
//  app.use(express.json())
// app.use(route) 
app.get('/',(req,res)=>{
  console.log(req.body)
  console.log(req.query)
  console.log(req.params)
  console.log(req.headers)
  

})
app.listen(8080, () => {
  console.log("connection done");
});
