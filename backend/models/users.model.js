const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:6,
        max:255
    },
    
    email:{
        type:String,
        required:true,
        max:255,
        min:8,
        unique: true,
        dropDups: true
    },

    password:{
       type:String,
       required:true,
       max:1024,
       min:8
    },

    date:{
        type:Date,
        default:Date.now
    }
});



module.exports = mongoose.model('User',userSchema)
