
var express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://Roberto:rayssa13@nodereact-mwmcs.mongodb.net/NodeReactTipoArbnb?retryWrites=true&w=majority',
{useNewUrlParser: true,
useUnifiedTopology: true})


app.use(express.json());

app.use(routes);


app.listen(3333, ()=>{
    console.log('Rodando na porta 3333')
})