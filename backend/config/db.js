const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/academy").then(()=>{
    console.log("database conected");
}).catch((err)=>{
    console.log(err);
});