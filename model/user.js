const mongoose = require("mongoose");

const { Schema, model, models } = mongoose;

const userSchema = new Schema({
    name : {type : String, required : true, trim : true},
    email : {type : String, required : true, trim : true, unique : true}
});

const User = models.User || model("User", userSchema);

exports.User = User;
