const express = require('express')
const app = require("liquid-express-views")(express())

app.listen(3000, ()=>{
    console.log("listnening on port 3k")
})


