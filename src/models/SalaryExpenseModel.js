let mongoose = require('mongoose');
let {ObjectId} = mongoose.Schema.Types;

let SalaryModel = new mongoose.Schema(
    {
        Employee:{type : String, required : true},
        Salary:{type : Number, required : true},
        Department:{type : String, required : true},
        Price:{type : Number, required : true},
    },
    {timestamps : true , versionKey : false}
)

let Salary = mongoose.model('Salary', SalaryModel);
module.exports = Salary;