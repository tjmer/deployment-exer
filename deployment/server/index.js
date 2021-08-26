const express = require("express")
const path = require("path")

const app = express()

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../index.html"))
    res.sendFile(path.join(__dirname"../index.js"))
    res.sendFile(path.join(__dirname"../styles.css"))
    
})

// app.get("/js", function(req, res){
//     res.sendFile(path.join(__dirname"../index.js"))
// })

// app.get("/css", function(req, res) {
//     res.sendFile(path.join(__dirname"../index.js"))
// })

const port = process.env.PORT || 4004

app.listen(port, ()=>{
    console.log(`Up on port ${port}`)
})