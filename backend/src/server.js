
var express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path')
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://Roberto:rayssa13@nodereact-mwmcs.mongodb.net/NodeReactTipoArbnb?retryWrites=true&w=majority',
{useNewUrlParser: true,
useUnifiedTopology: true})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')))

app.use(routes);


app.listen(3333, ()=>{
    console.log('Rodando na porta 3333')
})