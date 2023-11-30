const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req, res)=>{
    res.render("index.ejs")
})

app.get("/create", (req, res) =>{
    res.render("createroom.ejs")
})


app.listen(port, ()=>{
    console.log(`Listening port ${port}`);
})