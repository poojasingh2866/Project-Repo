const mongoose=require('mongoose');

const User=mongoose.model('User');
module.exports.register=(req,res,next)=>{

     console.log('inside register function ');
    var user=new User();
    user.full_name = req.body.full_name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err,doc)=>{
        if(!err)
           res.send(doc);
        else
           console.log(err);
    
        
    });
}