import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("hello world123");
})
app.listen(3000,()=>{
    console.log("listening on port 3000");
})
// password:auth_tut