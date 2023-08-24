const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/NewItems", {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{console.log("database connect successfuly")}).catch((e)=>{
    console.log("You got error in database connection")
})