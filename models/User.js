const mongoose =require('mongoose');

const UserSchema  = new mongoose.Schema({
    user_id: String,
    password: String,
    email: String,
    name: String,
    lastname : String,
    nation_id : Number,
    gender : {type: String , enum:['ชาย','หญิง']},
    phone_no : Number,
},
{ timestamps: true }
)
 module.exports = mongoose.model('User', UserSchema)