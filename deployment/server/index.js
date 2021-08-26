const express = require("express")
const path = require("path")

const app = express()

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../index.html"))
})

app.get("/", function(req, res) {
    res.sendFile(path.join("../styles.css"))
})

app.get("/", function(req, res){
    res.sendFile(path.join("../index.js"))
})

const port = process.env.PORT || 4004

app.listen(port, ()=>{
    console.log(`Up on port ${port}`)
})