const mongoose = require('mongoose');
var userSchema = mongoose.Schema({
   
    date:{type:Date},
    trainingName:{type:String},
    trainerName:{type:String},
    category:{type:String},
    targetAudience:{type:String},
    totalNominations:{type:Number},
    present:{type:Number},
    absent:{type:Number}

    
});
mongoose.model('trainingCalendar',userSchema); //here users is a collection name and second peramiter(userSchema) is the column(schema) for that collection