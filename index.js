const express = require("express");
const app= express();

console.dir(app);

let port = 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})

app.get("/",(req,res)=>
{
res.send("hello i am root");
})

app.get("/:username/:id",(req,res)=>
{
    let{username, id} = req.params;
    htmlStr= `<h1>welcome to the page of @${username}!</h1>`
res.send(htmlStr);
})



app.get("/search", (req,res) =>
{
    let {q} = req.query;
    if(!q)
    {
        res.send(`<h1>Nothing Searched</h1>`)
    }
        console.log(req.query);
    res.send(`<h1>search results for query: ${q}</h1>`);
})
















// app.get("/mango",(req,res)=>
// {
// res.send("you Contacted mango path");
// })

// app.post("/", (req, res)=>{
//     res.send("path does not exist to post method");
// });






// app.use((req, res) =>
// {
//    // console.log(req);
//     console.log("request receieved");
  
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>"
//     res.send(code);
// });