//write a first code for creating api
let express = require("express");
let app = express();
//midlware
app.use(express.json());
//api
//middlware
app.get(
  "/",
  (req, res, next) => {
    if (req.body.name == "utsav") {
      next();
    } else {
      res.send("you are not autharized");
    }
  },
  async (req, res) => {
    let data = await "utsav";
    res.send(data);
  }
);
app.get("/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  res.send("hello world !");
});

app.get("/about", (req, res) => {
  res.send("hello about");
});
app.listen(8080, () => {
  console.log("connection done");
});
