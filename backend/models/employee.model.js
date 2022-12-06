const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type:String,
        minlength:3
    },
    dob:{
        type: Date,
        trim: true
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    salary: { 
        type: Number,
        min: 1000.00,
        max: 100000.00
    }
}, 
    {
        timestamps:true
    });


 const Employee = mongoose.model('Employee',employeeSchema);
 
 module.exports = Employee;












