let path=require('path')
let fs=require('fs')
 let temppath=path.join(__dirname,'../../../','demo2.txt')
 console.log(temppath)
fs.readFile('../../../demo2.txt','utf-8',(err,data)=>{
if(err)
    {
        console.log(err)
    }
    else{
        console.log(data)
    }
})