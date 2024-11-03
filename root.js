const express = require('express')
const app = express()
const PORT  = 4000
const HOST = '0.0.0.0'

// post get put delete 

app.get('/', (req, res)=>{
    res.send("hello to our image !!!")

})

app.listen(PORT, HOST, ()=>{
    console.log("application")
} )

