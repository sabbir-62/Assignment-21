let mongoose = require('mongoose');

let SalesSchema = new mongoose.Schema(
    {
        Product:{type : String, required : true},
        quantity:{type : Number, required : true},
        price:{type : Number, required : true},
    },
    {timestamps : true , versionKey : false}
)

let Sales = mongoose.model('sales', SalesSchema);
module.exports = Sales;