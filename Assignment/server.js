let http = require("http");
let PORT = 8080;
let path = require("path");
let fs = require("fs");
let server = http.createServer((req, res) => {
  let messagePath = path.join(__dirname, "public/message.html");
  let dbPath = path.join(__dirname, "db/msg.json");
  if (req.url == "/" && req.method == "GET") {
    fs.readFile(messagePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("somthing wrong while reading , files");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url == "/" && req.method == "POST") {
    let msg = "";
    req.on("data", (chunk) => {
      msg += chunk;
    });
    req.on("end", () => {
      let obj = {
        id: Math.trunc(Math.random() * 10000),
        text: JSON.parse(msg),
      };
      fs.readFile(dbPath, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("somthing wrong");
        } else {
            let parseData=JSON.parse(data)
            parseData=[...parseData,obj]
             fs.writeFile(dbPath,JSON.stringify(parseData),(err)=>{
                if(err)
                {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("somthing wrong");
                }
                else{
                   
                    res.writeHead(500, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(parseData));

                    //dynmic data  creation form nodejs
                    // let template=''
                    // parseData.map((item)=>{
                    //     template += `<h1>${item.text}</h1> <br/>`
                    // })
                    // fs.readFile(messagePath,'utf8',(err,data)=>{
                    //    let newTemp= data.replace(' <!-- content -->',template)
                    //    res.end(newTemp)
                    // })
                   // res.end(JSON.stringify(parseData))
                }
             })
        }
      });
    });
  } else {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("invalid url");
  }
});
server.listen(PORT, () => {
  console.log(`server is live at ${PORT}`);
});
