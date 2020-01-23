const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/questionsDB', {useNewUrlParser: true}, (err)=>{
    if (!err)
        console.log("mongo connected to port 27017...");
    else
        console.log("Error connecting to mongo- "+err);
});

module.exports=mongoose;
//module is the current module object and 
//exports is an object that exposes anything attached to it as a module. (to be used outside current module).
