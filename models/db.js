const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },(err)=>{
    if(!err){
        console.log('Connection establish successfully');

    }
    else{
        console.log('Error in Mongodb connection'+JSON.stringify(err,undefined,2));
    }
});
require('./user.model');