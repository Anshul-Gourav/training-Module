require('../model/userModel');
const mongoose = require('mongoose');
var users = mongoose.model('trainingCalendar');
module.exports.display= (req,res)=>{
    res.send("working");
}

// storing the values in database

module.exports.newTraining= (req, res)=>{
   console.log(req.body);
    var newEntry = new  users({
        
        // month: req.body.month,

        date: req.body.date,
        trainingName: req.body.trainingName,
        trainerName: req.body.trainerName,
        category: req.body.category,
        targetAudience : req.body.targetAudience,
        totalNominations: req.body.totalNominations,
        present: req.body.present,
        absent :req.body.absent

    })
    newEntry.save().then ((data)=>{
            
        return res.status(200).json({
            success:true, 
            message:"new user added successfully",
            User: data
        })
    }).catch((err)=>{
        return res.status(404).json({
            success:false,
            message:err.message,
            Error:err
        })
    })

}
module.exports.getData  = function(req,res){
    users.find((err,data)=>{
        if(data==null){
            res.send("no record found");
        }
        else if (err){
            res.send(err);
        }
        else{
            res.send(data);
            console.log("users data:-", data)
        }
    })
}
module.exports.updateEntry = function(req,res){
    let newID = req.params.id;
    //  console.log("update body=",req.body);

    // let newFirstname = req.body.firstname;
    // let newSurname = req.body.surname;
    // let newAge = req.body.age;
    // let img = req.body.img;
    // console.log(newFirstname, newSurname, newAge);
    users.findByIdAndUpdate(newID, {$set:req.body},{new:true},(err,data)=>{
        if(data == null){
            res.send(err);
        }else{
            res.send(data);
        }
    })
}
module.exports.delete = function(req,res){
    let urluserID = req.params.id;
   
    // console.log(urluserID);
    users.findByIdAndDelete(urluserID, function(err,data){
        if(data == null){
            res.send("There is no record with ID:-"+urluserID);
        }else{

            res.send(data);
        }
    })   
}