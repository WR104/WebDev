const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("New Request");
//     res.send("Hello")
// });

app.get('/', (req, res) => {
    res.send("<h1>home page</h1>");
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit}</h1>`);
})

app.get('/r/:subreddit/comments/:postId',(req,res)=>{
    const{subreddit,postId} = req.params;
    res.send(`<h1>Browsing the ${postId} on subreddit ${subreddit}`);
})

app.get('/cats', (req, res) => {
    res.send("Meow");
})

app.post('/cats', (req, res) => {
    res.send("Post to cats");
})
app.get('/dogs', (req, res) => {
    res.send("Woof");
})

app.get('/search',(req,res)=>{
    const {q} = req.query;
    if(!q){
        res.send("Nothing found");
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
})

app.get('*', (req, res) => {
    res.send("Unkown Path");
})

app.listen(8080, () => {
    console.log("Listening on port 8080")
})