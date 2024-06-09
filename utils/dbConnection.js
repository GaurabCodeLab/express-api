require('dotenv').config();
const mongoose = require("mongoose");

exports.dbConnection = async ()=>{
  
    const options = {
        dbName : process.env.DB_NAME,
        user : process.env.DB_USER,
        pass : process.env.DB_PASSWORD,
    };
      await mongoose.connect(process.env.DB_URI, options);
};
