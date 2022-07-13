const express = require('express');
const bodyParser = require('body-parser');
require("./config/db");
const routes = require('./routes/userRoutes');
const app = express();
const cors= require('cors');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:4200");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
});

app.use('/',routes);

app.listen(2000,()=>{
    console.log("server is up");
});