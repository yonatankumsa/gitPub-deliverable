const express = require('express')
const app = require("liquid-express-views")(express())
const drinks = require('./models/drinks.js')

app.listen(3000, ()=>{
    console.log("listnening on port 3k")
})


app.get("/", (req,res)=>{
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req,res)=>{
    res.render("index.liquid", {
        drinks : drinks
    })
})

    // app.get("/drinks/:id/", (req,res)=>{
    //     res.send(req.params.id)
    // })


app.get("/drink/:indexOfDrinksArray", (req,res)=>{
res.render("show", {id:drinks[req.params.indexOfDrinksArray]})
})