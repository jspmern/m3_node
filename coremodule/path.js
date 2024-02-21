let path=require('path')
let fs=require('fs')
let result;
//result=path.join('c:/abc/xyz','abc','temp') //imp
let temppath=path.join(__dirname,'file1/file2/file3/demo.txt')
result=path.basename(temppath)
result=path.extname(temppath)
result=path.normalize('xyz/abc/../../tmp.txt')
console.log(result)
 
// fs.readFile(temppath,'utf-8',(err,data)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

 