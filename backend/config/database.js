const mongoose = require("mongoose");

const connectDatabase =( )=>{
mongoose.connect("mongodb://localhost:27017/Ecommerce"
    ,{
        // useNewUrlParse:true,
        useUnifiedTopology:true
        // ,useCreateIndex:true
    }).then((data)=>{
    console.log(`Mongobd connected with server: ${data.connection.host}`);
    });

};

module.exports = connectDatabase;