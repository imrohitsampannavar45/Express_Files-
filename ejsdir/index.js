const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/", (req, res) =>
{
    res.render("home");
})
app.get("/hello", (req, res) =>
{
    res.send(`hello`);
})

app.get("/ig/:username", (req, res) =>
{
    let {username} = req.params;
   const instadata = require("./data.json");
   const data = instadata[username];
   if(data){
    res.render(`instagram.ejs`, {data});
   }else{
    res.render(`error.ejs`);
   }
   console.log(instadata);
    res.render(`instagram.ejs`, {data});
})
app.get("/rolldice", (req, res) =>
{
    let diceval = Math.floor(Math.random()*6)+1
    res.render("rolldice.ejs",{ diceval: diceval });
})
app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});

