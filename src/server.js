//const express = require('express');
var express = require('express');

const app = express();


app.get('/', (req, res) =>{
    return res.json({ message:"Hello night" });
})



app.listen(3333);